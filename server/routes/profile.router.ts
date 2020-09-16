import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import axios from 'axios';

const router: express.Router = express.Router();

//GET route for getting user profile data
router.get(
  '/about/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const queryText = `SELECT email, first_name, last_name, display_name, address, bio, city, community_role, facebook, headshot, instagram, job_title, linkedin, organization_name, state, twitter, zip_code FROM about JOIN "users" ON "about".user_id= "users".id WHERE "users".id=$1;`;
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

/**
 * POST route template
 */
// router.post(
//   '/',
//   (req: Request, res: Response, next: express.NextFunction): void => {
//     // POST route code here
//   }
// );

//PUT route for updating user profile data on about table
router.put(
  '/about/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const profile = req.body;

    const queryText = `UPDATE "about" SET display_name = $1, address = $2, bio = $3, city = $4, community_role = $5, facebook = $6, headshot = $7, instagram = $8,
                      job_title = $9, linkedin = $10, organization_name = $11, state = $12, twitter = $13, zip_code = $14 WHERE user_id = $15;`;
    pool
      .query(queryText, [
        profile.display_name,
        profile.address,
        profile.bio,
        profile.city,
        profile.community_role,
        profile.facebook,
        profile.headshot,
        profile.instagram,
        profile.job_title,
        profile.linkedin,
        profile.organization_name,
        profile.state,
        profile.twitter,
        profile.zip_code,
        userId,
      ])
      .then((response) => {
        res.send(response.rows);
        res.status(200);
      })
      .catch((err) => {
        console.log('PUT about table error:', err);
        res.status(500);
        res.send(err);
      });
  }
);

router.put(
  '/user/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const profile = req.body;

    const query = `UPDATE "users" SET email = $1, first_name = $2, last_name = $3 WHERE id = $4;`;
    pool
      .query(query, [
        profile.email,
        profile.first_name,
        profile.last_name,
        userId,
      ])
      .then((dbResponse) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

export default router;
