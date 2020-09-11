import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

//GET route for getting user profile data
router.get(
  '/profile/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const queryText = `SELECT community_role, organization_name, job_title, headshot, bio, email, first_name, last_name, twitter, facebook, linkedin, instagram   FROM about
                        JOIN "users" ON "about".user_id= "users".id 
                        JOIN "demographic" on "demographic".user_id= "users".id  WHERE "users".id=$1;`;
    pool
      .query(queryText, [userId])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('Error completing GET profile query', err);
        res.sendStatus(500);
      });
  }
);

//POST route for posting to the about table
router.post(
  '/register/about/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(req.body);
    const displayName = req.body.displayName;
    const communityRole = req.body.role;
    const organizationName = req.body.organization;
    const jobTitle = req.body.title;
    const address = req.body.streetAddress;
    const city = req.body.city;
    const state = req.body.state;
    const zipCode = req.body.zipcode;
    const linkedin = req.body.linkedin;
    const facebook = req.body.facebook;
    const twitter = req.body.twitter;
    const headshotPic = req.body.profilePic;
    const bio = req.body.bio;
    const tshirtSize = req.body.shirtSize;
    const birthday = req.body.birthday;
    const mentor = req.body.mentor;
    const mentee = req.body.mentee;
    const userId = req.params.id;

    const queryText = `INSERT INTO "about" (display_name, community_role, organization_name, job_title, address, city, state, zip_code, linkedin, facebook, twitter, headshot, bio, tshirt_size, birthday, mentor, mentee, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18);`;
    pool
      .query(queryText, [
        displayName,
        communityRole,
        organizationName,
        jobTitle,
        address,
        city,
        state,
        zipCode,
        linkedin,
        facebook,
        twitter,
        headshotPic,
        bio,
        tshirtSize,
        birthday,
        mentor,
        mentee,
        userId,
      ])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error completing about table POST query', err);
        res.sendStatus(500);
      });
  }
);

//POST route for posting to the demographic table
router.post(
  '/register/demographic/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(req.body);
    const age = req.body.age;
    const ethnicity = req.body.ethnicity;
    const gender = req.body.gender;
    const sexualOrientation = req.body.sexual_orientation;
    const ability = req.body.ability;
    const income = req.body.income_level;
    const education = req.body.education_level;
    const userId = req.params.id;

    const queryText = `INSERT INTO "demographic" (age, ethnicity, gender, sexual_orientation, ability, income, education, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    pool
      .query(queryText, [
        age,
        ethnicity,
        gender,
        sexualOrientation,
        ability,
        income,
        education,
        userId,
      ])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error completing demographic table POST query', err);
        res.sendStatus(500);
      });
  }
);
//POST route for posting to the social_media table
// router.post(
//   '/register/social/:id',
//   (req: Request, res: Response, next: express.NextFunction): void => {
//     console.log(req.body);
//     const linkedin = req.body.linkedin;
//     const facebook = req.body.facebook;
//     const instagram = req.body.instagram;
//     const twitter = req.body.twitter;
//     const userId = req.params.id;

//     const queryText = `INSERT INTO "social_media" (twitter, facebook, linkedin, instagram, user_id) VALUES ($1, $2, $3, $4, $5);`;
//     pool
//       .query(queryText, [linkedin, facebook, instagram, twitter, userId])
//       .then(() => res.sendStatus(201))
//       .catch((err) => {
//         console.log('Error completing social_media table POST query', err);
//         res.sendStatus(500);
//       });
//   }
// );

export default router;
