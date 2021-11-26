# LAP 1 Portfolio Week Project: Community Journaling Website
​
### By Souheil Fenghour, Talha Sadak, James Quinn and Bethan Vaughan
​
## Project Description
​
This is a group project which asked us to create an online community journaling website where users can visit and anonymously post blog entries. The user can input their blog in 3 parts: the title, the main blog contents which is limited to 200 characters, and a gif which they select by typing in the topic of gif they would like and clicking Preview. The website consists of a homepage where users post their blogs and view other peoples' entries, the about page, and the featured blog page. When the user clicks on a blog card on the home page, they are taken to a page which displays only that blog, where they can comment and react to the entry with a selection of 3 emojis.
​
## Installation & Usage
​
- To clone the project into your local machine, type git clone followed by the SSH key into the command line
- For first time installation, type `npm install` to install all required dependencies of the projects.
- To run the code, type `npm start`
- To run the tests, type `npm test`
- To see the coverage, type `npm run coverage`
​
## Technologies
​
- HTML/CSS
- JavaScript
- Node / Express.js
- Jest / Coverage / Supertest
- Nodemon
- Cors
​
## Issues and Challenges
​
We experienced several small issues during the project. Initially, we had difficulty deploying to Heroku and saving the data within .json files and we consistantly faced a CORS error, however these issues were resolved. We also had some difficulty compiling the backend server tests.
​
## Future Features
​
- add a counter to the emojis as well as functionality so that the user can reverse their choice
​
- add category selection options in the input form section
​
## Files
​
## Client side
​
### script.js
​
- Contains frontend functions
​
### emojis.js
​
- Contains frontend functionality for the 3 emojis
​
### pagination.js
​
- Contains frontend functionality to change page with page numbers and previous/next buttons
​
### counter.js
​
- Contains Edica template functions
​
### loader.js
​
- Contains Edica template function
​
### main.js
​
- Contains Edica template functions
​
### index.html
​
- Html structure of Homepage
​
### about.html
​
- Html structure of About page
​
### blog-single.html
​
- Html structure of Featured Blog page
​
### style.css
​
- Principal styling of the homepage
​
### style.css.map
​
- Bootstrap styling
​
### emojis.css
​
- Styling of the emojis
​
## Server side
​
### Models: blog.js
​
- Class of the Blog
​
### data.json
​
- Database with the 7 premade blogs
​
### database.js
​
- Contains functions for the database
​
### app.js
​
- Starts the server and contains server functionality
​
## Testing
​
### script.test.js
​
- Tests frontend functionality
​
### layout.test.js
​
- Tests layout of webpage
​
### pagination.test.js
​
- Tests functionality of the pagination elements (frontend)
​
### api.spec.js
​
- Tests backend functionality