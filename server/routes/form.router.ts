import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // GET route code here
  }
);

/**
 * POST route template
 */
router.post(
  '/register/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(req.body);
    const communityRole = req.body.communityRole;
    const organizationName = req.body.organizationName;
    const jobTitle = req.body.jobTitle;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipCode = req.body.zipCode;
    const linkedin = req.body.linkedin;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const twitter = req.body.twitter;
    const headshotPic = req.body.headshotPic;
    const bio = req.body.bio;
    const tshirtSize = req.body.tshirtSize;
    const userId = req.params.id;

    const queryText = `INSERT INTO "about" (community_role, organization_name, job_title, address, city, state, zip_code, headshot, bio, tshirt_size, birthday, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);`;
    pool
      .query(queryText, [
        communityRole,
        organizationName,
        jobTitle,
        address,
        city,
        state,
        zipCode,
        linkedin,
        facebook,
        instagram,
        twitter,
        headshotPic,
        bio,
        tshirtSize,
        userId,
      ])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error completing about table query', err);
        res.sendStatus(500);
      });
  }
);

export default router;
