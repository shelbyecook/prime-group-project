import { Request, Response } from 'express';
require('dotenv').config();
import express from 'express';
import pool from '../modules/pool';
import axios from 'axios';
const router: express.Router = express.Router();
const { response } = require('express');



const AIRTABLE_KEY  = process.env.AIRTABLE_API_KEY;


/**
 * GET route template
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // GET route code here
    
    console.log('THIS IS THE CONSOLE LOG', process.env.AIRTABLE_API_KEY);

    axios({
      method: 'GET',
      url:
        'https://api.airtable.com/v0/appuvYL7KtFPgB0ow/Imported%20table/recSuUlFzEY2Ju9WN',
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
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
