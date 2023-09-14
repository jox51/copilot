import DiscordProvider, { DiscordProfile } from "next-auth/providers/discord"
import { eq } from "drizzle-orm"
import { PlanetScaleAdapter } from "./planetScaleAdapter"
import { db } from "@/db"
import { existingUsers, users } from "@/db/schema"
import type { NextAuthOptions } from "next-auth"
import type { JWT } from "next-auth/jwt"

export const authOptions: NextAuthOptions = {
  adapter: PlanetScaleAdapter(db),
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin"
  },
  providers: [
    DiscordProvider({
      profile(profile: DiscordProfile) {
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png"
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
        }
        return {
          ...profile,
          name: profile.username,
          email: profile.email,
          discriminator: profile.discriminator,
          image: profile.image_url,
          fullName: `${profile.username}#${profile.discriminator}`,
          // role: profile.email === "salidom9738@gmail.com" ? "admin" : " "
          role: "notRegistered"
        }
      },
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async jwt({ token, user, profile }) {
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.email, token.email || ""))
        .limit(1)

      const [dbHandle] = await db
        .select()
        .from(existingUsers)
        .where(eq(existingUsers.discordHandle, token.name || ""))
        .limit(1)

      let dbRole: string | null = ""
      if (
        token &&
        (token?.name === "jox51" || token?.name === "sleepmoneymaker")
      ) {
        dbRole = "admin"
      } else if (dbHandle && dbHandle.discordHandle) {
        dbRole = "user"
      } else if (dbUser && dbUser.role) {
        // add logic later for new subscribers
        dbRole = dbUser.role
      } else {
        dbRole = "notRegistered"
      }

      // Update the role in the database if dbUser exists
      if (dbUser) {
        await db
          .update(users)
          .set({ role: dbRole })
          .where(eq(users.id, dbUser.id))
      }

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        ...token,
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        role: dbRole
      }
    },
    async session({ token, session, user }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        session.user.role = token.role
      }

      return session
    }
  }
}
