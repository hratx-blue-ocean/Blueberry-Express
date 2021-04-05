DROP DATABASE IF EXISTS blueberry_db;

CREATE DATABASE blueberry_db;

USE blueberry_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name varchar,
    email varchar,
    bio varchar,
    profile_img bytea,
    timezone integer,
    last_login date,
    zoom_link varchar,
    google_key varchar,
    student boolean
);

CREATE TABLE user_languages (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id) ON UPDATE CASCADE,
    language_id integer REFERENCES languages(id) ON UPDATE CASCADE,
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    teacher_id integer REFERENCES users(id) ON UPDATE CASCADE,
    student_id integer REFERENCES users(id) ON UPDATE CASCADE,
    rating integer,
    comment varchar,
    appointment_id integer REFERENCES appointments(id) ON UPDATE CASCADE,
    created_at date
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    from_id integer REFERENCES users(id) ON UPDATE CASCADE,
    to_id integer REFERENCES users(id) ON UPDATE CASCADE,
    scheduled_for date,
    created_at date,
    google_calendar_id integer,
    approved boolean,
    pending boolean
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    from_id integer REFERENCES users(id) ON UPDATE CASCADE,
    to_id integer REFERENCES users(id) ON UPDATE CASCADE,
    text varchar,
    subject varchar,
    opened boolean,
    created_at date
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  name varchar
);








