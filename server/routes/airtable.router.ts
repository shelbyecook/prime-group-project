import { Request, Response } from 'express';
require('dotenv').config();
import express from 'express';
import pool from '../modules/pool';
import axios from 'axios';
const router: express.Router = express.Router();
const { response } = require('express');

const AIRTABLE_KEY = process.env.AIRTABLE_API_KEY;
const BASE = process.env.BASE;

router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios({
      method: 'GET',
      // url: `https://api.airtable.com/v0/${BASE}/Imported%20table/recSuUlFzEY2Ju9WN`,
      url: `https://api.airtable.com/v0/${BASE}/Speaker`,
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

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // POST route code here
  }
);

export default router;
