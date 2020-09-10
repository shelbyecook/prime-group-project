import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import axios from 'axios';
const router: express.Router = express.Router();
const { response } = require('express');
/**
 * GET route template
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // GET route code here
    axios({
      method: 'GET',
      url:
        'https://api.airtable.com/v0/appuvYL7KtFPgB0ow/Imported%20table/recSuUlFzEY2Ju9WN',
      headers: {
        Authorization: `Bearer keyFf5LEuetu81Zyk`,
      },
    })
      .then((response) => {
        res.send(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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

export default router;
