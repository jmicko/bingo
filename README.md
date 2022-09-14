
# Desktop Bingo
This was a very hastily created project that I built in one of my last days at Prime Digital Academy. It was inspired by an old Slack channel where they used to play bingo before the pandemic forced everyone into distance learning. This was just a way for us to generate digital bingo cards so we could easily play again.

I have since gone and fixed some of the strange database connection details that were... hasty. Mustn't be hasty.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `bingo` and create these tables:

```SQL
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
```

If you would like to name your database something else, you will need to change `bingo` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  PGUSER='pguser'
  PGPASSWORD='pgpassword'
  SERVER_SESSION_SECRET='superDuperSecret'
  ```
  While you're in your new `.env` file, you'll need to take the time to replace your postgresql credentials, as well as replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Production Build

Run `npm run build` in terminal. This will create a build folder that contains the web pages that will be served to the user. You can test this build by typing `npm start` to use node as your server. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`
