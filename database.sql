-- Drop existing tables to start fresh
DROP TABLE IF EXISTS "user", "cards";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "cards" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "card_numbers" int[] NOT NULL
);

ALTER TABLE "cards" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

