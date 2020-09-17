import express from 'express';
import bodyParser from 'body-parser';
import sessionMiddleware from './modules/session-middleware';
import passport from './strategies/user.strategy';
import userRouter from './routes/user.router';
import airtableRouter from './routes/airtable.router';
import formRouter from './routes/form.router';
// const imageUrlRouter = require('./routes/image-url.router.js');
import profileRouter from './routes/profile.router';
import imageUrlRouter from './routes/image-url.router';
import skillsRouter from './routes/skills.router';
import nodemailer from 'nodemailer';
import nodemailerRouter from './routes/nodemailer.router';

const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

require('dotenv').config();

const app: any = express(); //test

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/airtable', airtableRouter);
app.use('/api/form', formRouter);
app.use('/api/nodemailer', nodemailerRouter);

app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'innovateher', // required
    region: 'us-east-2', // optional
    headers: { 'Access-Control-Allow-Origin': '*' }, // optional
    ACL: 'public-read', // this is the default - set to `public-read` to let anyone view uploads
  })
);

app.use('/api/imageurl', imageUrlRouter);
app.use('/api/profile', profileRouter);
app.use('/api/skills', skillsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT: number | string = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, (): void => {
  console.log(`So awesome. Much wow. Listening on port: ${PORT}`);
});

export default app;
