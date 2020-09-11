-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR (150) UNIQUE NOT NULL,
    "first_name" VARCHAR (100) NOT NULL,
    "last_name" VARCHAR (100) NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "demographic" (
    "id" SERIAL PRIMARY KEY,
    "age" VARCHAR (150),
    "ethnicity" VARCHAR (50),
    "gender" VARCHAR (20),
    "sexual_orientation" VARCHAR (50),
    "ability" VARCHAR (50),
    "income" VARCHAR (50),
    "education" VARCHAR (50),
    "user_id" int REFERENCES "users" 
);
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
 	"name" VARCHAR (100)
);
CREATE TABLE "skills" (
    "id" SERIAL PRIMARY KEY,
    "skill" VARCHAR (150),
    "category_id" int REFERENCES "category" 
);
CREATE TABLE "users_skills" (
    "id" SERIAL PRIMARY KEY,
    "user_id" int REFERENCES "users",
    "skill_id" int REFERENCES "skills" 
);
CREATE TABLE "social_media" (
    "id" SERIAL PRIMARY KEY,
    "twitter" VARCHAR (150),
    "facebook" VARCHAR (150),
    "linkedin" VARCHAR (150),
    "instagram" VARCHAR (150),
    "user_id" int REFERENCES "users" 
);
CREATE TABLE "about" (
    "id" SERIAL PRIMARY KEY,
    "display_name" VARCHAR (100),
    "community_role" VARCHAR (150),
    "organization_name" VARCHAR (100),
    "mentor" boolean,
    "mentee" boolean,
    "job_title" VARCHAR (100),
    "address" VARCHAR (150),
    "city" VARCHAR (100),
    "state" VARCHAR (100),
    "zip_code" int,
    "linkedin" VARCHAR (150),
    "facebook" VARCHAR (150),
    "twitter" VARCHAR (150),
    "headshot" VARCHAR (200),
    "bio" VARCHAR (300),
    "tshirt_size" VARCHAR (50),
    "birthday" DATE,
    "user_id" int REFERENCES "users" 
);
-- starter categories
INSERT INTO "category" ("name")
VALUES 
('Leadership'),
('Business and Entrepreneurship'),
('Marketing and Sales'),
('Techical Skills'),
('Accounting and Finance'),
('Legal'),
('Health and Wellness'),
('Education'),
('Artists and Creatives'),
('Community Advocacy'),
('Civic Engagement');