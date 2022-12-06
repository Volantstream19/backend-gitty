-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS github_users;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post VARCHAR
);

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL
);

CREATE TABLE github_users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  login TEXT NOT NULL,
  email TEXT,
  avatar TEXT 
);

INSERT INTO 
  posts (post)
VALUES
  ('Hello this is my 1st post'),
  ('Hello this is my 2nd post'),
  ('Hello this is my 3rd post')