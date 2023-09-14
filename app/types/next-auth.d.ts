import type { JWT, DefaultJWT } from "next-auth/jwt"
import type { Session, User } from "next-auth"

type UserId = string
type Discriminator = string

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: UserId
    discriminator: Discriminator
    role: string | null
    username: string | null
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId
      discriminator: Discriminator
      role: string | null
      username: string | null
    }
  }
}
