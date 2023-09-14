CREATE TABLE `existing_users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`discordHandle` varchar(255) NOT NULL,
	CONSTRAINT `existing_users_id` PRIMARY KEY(`id`),
	CONSTRAINT `existing_users_discordHandle_unique` UNIQUE(`discordHandle`)
);
