import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

//GET route for getting from the skills table 
router.get(
  '/skills',
  (req: Request, res: Response, next: express.NextFunction): void => {
    
  }
);

//POST route for posting to the user_skills table
router.post(
  '/skills',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user_id: string = <string>req.body.user_id;
    const skill_id: string = <string>req.body.category_id;

    const queryText: string = `INSERT INTO "user_skills" (user_id, skill_id)
    VALUES ($1, $2)`;
    pool
      .query(queryText, [user_id, skill_id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving skill to database: ${err}`);
        res.sendStatus(500);
      });
  }
);



//DELETE route for deleting a skill

module.exports = router;