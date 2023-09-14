CREATE TABLE `form_parameters` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`tickers` text NOT NULL,
	`recs` text NOT NULL,
	`optionTypes` text,
	`expirationDate` text,
	`minProfitPercentage` text,
	`maxProfitPercentage` text,
	`targetStrikes` text,
	`maxBudget` text,
	CONSTRAINT `form_parameters_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
