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
    const queryText = `SELECT display_name, community_role, organization_name, mentor, mentee, job_title, headshot, bio, email, first_name, last_name, twitter, facebook, linkedin, instagram   FROM about
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

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // POST route code here
  }
);

//PUT route for updating user profile data on about table
router.put(
  '/about/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const displayName = req.body.displayName;
    const communityRole = req.body.communityRole;
    const organizationName = req.body.organizationName;
    const jobTitle = req.body.jobTitle;
    const bio = req.body.bio;
    const mentor = req.body.mentor;
    const mentee = req.body.mentee;
    const twitter = req.body.twitter;
    const fb = req.body.facebook;
    const linkedin = req.body.linkedin;
    const instagram = req.body.instagram;

    const queryText = `UPDATE "about" SET display_name = $1, community_role = $2, organization_name = $3, 
                      job_title = $4, bio = $5, mentor = $6, mentee = $7, twitter = $8, facebook = $9, linkedin = $10, instagram = $11
                      WHERE id = $12;`;
    pool
      .query(queryText, [
        displayName,
        communityRole,
        organizationName,
        jobTitle,
        bio,
        mentor,
        mentee,
        twitter,
        fb,
        linkedin,
        instagram,
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

export default router;
