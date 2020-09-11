import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

//GET route for getting skills from the skills table
router.get(
  '/skills',
  (req: Request, res: Response, next: express.NextFunction): void => {
    
  }
);



//POST route for the data displaying to the page??
// router.post(
//     '/skills',
//     (req: Request, res: Response, next: express.NextFunction): void => {
    
//   );
  




//POST route for posting to the user_skills table
router.post(
  '/skills',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user_id = req.body.user_id;
    const skill_id = req.body.category_id;

    const queryText: string = `INSERT INTO "users_skills" (user_id, skill_id)
    VALUES ($1, $2);`;
    pool
      .query(queryText, [user_id, skill_id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving skill to database: ${err}`);
        res.sendStatus(500);
      });
  }
);



//DELETE route for deleting a skill off profile
router.delete(
    '/:id',
    (req: Request, res: Response, next: express.NextFunction): void => {
    const id = req.params.id;
    const queryText = `DELETE FROM "users_skills" WHERE "id" = $1;`;

    pool.query(queryText, [id] )
    .then((dbResponse) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(`Error with delete: ${err}`);
        res.sendStatus(500);
      });
});



//PUT route for editing user data
router.put(
    '/:id',
    (req: Request, res: Response, next: express.NextFunction): void => {
    const id = req.params.id;
    const skills = req.body;

    const queryText = `UPDATE "users_skills" SET "skill_id" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [
        skills.skill_id,
        id
    ])
    .then((dbResponse) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(`Error with edit: ${err}`);
        res.sendStatus(500);
      });
});





module.exports = router;