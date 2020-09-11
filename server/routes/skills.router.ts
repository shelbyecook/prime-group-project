import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get(
  '/skills',
  (req: Request, res: Response, next: express.NextFunction): void => {
    
  }
);

//POST route for posting to the skills table
router.post(
  '/skills',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const skill: string = <string>req.body.skill;
    const category_id: string = <string>req.body.category_id;

    const queryText: string = `INSERT INTO "skills" (skill, category_id)
    VALUES ($1, $2)`;
    pool
      .query(queryText, [skill, category_id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving skills to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

module.exports = router;