import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

// PUT to UPDATE PROFILE PICTURE
router.post(
  '/headshot/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const imageUrl = req.body.imageUrl;
    const imageId = req.params.id;
    const queryText = `INSERT into "about" (headshot) VALUES ($1);`;

    pool
      .query(queryText, [imageUrl, imageId])

      .then((response) => {
        res.send(response.rows);
        res.status(200);
      })
      .catch((err) => {
        console.log('PUT headshot about table error:', err);
        res.status(500);
        res.send(err);
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
