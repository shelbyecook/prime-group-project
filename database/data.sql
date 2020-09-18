-- Add users
INSERT INTO "users" (email, password, first_name, last_name)
VALUES ('crosbycalvillo@gmail.com', 'password123', 'Crosby', 'Calvillo'),
('sarahmiller@gmail.com', 'password123', 'Sarah', 'Miller'),
('briannahamption@gmail.com', 'password123', 'Brianna', 'Hampton'),
('kristinjones@gmail.com', 'password123', 'Kristin', 'Jones');


-- Add Profiles
INSERT INTO "about" 
(display_name, community_role, organization_name, job_title, 
address, city, state, zip_code, linkedin, facebook, twitter, 
instagram, headshot, bio, tshirt_size, birthday, 
mentor, mentee, user_id) 
VALUES
('Crosby Calvillo', 'Occupational Therapist', 'Advent Health', 'Acute Care OT',
'5315 Haskell Ave', 'Kansas City', 'KS', 66104, 'linkedin.link',
'facebook.link', 'twitter.link', 'instagram.link', 'photo url here',
'My name is Crosby and I enjoy helping people live their lives to the fullest.', 
'M', '04/18/1995', true, false, 1), 
('Sarah Miller', 'Elementary Teacher', 'Whispering Meadows Elementary', 
'Elementary Music Teacher', '5174 Anderson Dr.', 'Lees Summit', 'MO', 
'64134', 'linkedin.link', 'facebook.link', 'twitter.link', 'instagram.link', 
'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
'As a teacher, I love helping shape our future through my students!', 
'M', '07/13/1989', true, true, 2),
('Brianna Hampton', 'Registered Nurse', 'St. James Hospital', 'ICU RN', 
'9987 Wyandotte Rd.', 'Kansas City', 'MO', 64193, 
'https://www.linkedin.com', 'https://www.facebook.com', 'https://www.twitter.com', 
'https://www.instagram.com', 'https://innovateher.s3.us-east-2.amazonaws.com/Sample3.jpeg', 
'Hi! I am Brianna, a new RN, looking to meet likeminded individuals and get more involved in the community.', 
'M', '02/17/1994', true, true, 3),
('Kristin Jones', 'Secretary', 'Brock and Dunham Law', 'Paralegal Secretary', '8934 Valley Dr.', 
'Blue Springs', 'MO', 60933, 'https://www.linkedin.com', 'https://www.facebook.com', 
'https://www.twitter.com', 'https://www.instagram.com', 
'https://innovateher.s3.us-east-2.amazonaws.com/Sample2.jpeg', 
'Law is my passion.', 'S', '12/04/1992', false, false, 4);
