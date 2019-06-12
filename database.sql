--  Database name: pet_hotel

CREATE TABLE "owner"
(
"id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25) NOT NULL
);

CREATE TABLE "pet"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25) NOT NULL,
    "owner_id" INT REFERENCES "owner",
    "breed" VARCHAR(20) NOT NULL,
    "color" VARCHAR(20) NOT NULL,
    "checked_in" BOOLEAN DEFAULT true,
    "date_in" DATE,
    "visit" INT
);