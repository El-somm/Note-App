1. Project Overview

- What it is: A note-taking app built with Node.js that lets users log in with Google, create, view, update, and delete notes, and includes pagination for easy navigation.

2. Dependencies

- connect-mongo
- dotenv
- ejs
- express
- express-session
- express-ejs-layouts
- method-override
- mongodb
- mongoose
- passport
- passport-google-oauth20
<!-- dev dependencies -->
- nodemon

3. How to Set Up

- Clone the Project: Copy the project to your computer.
- Install Dependencies: Use npm i ...to install dependencies.
- Set Up MongoDB: Make sure you have MongoDB running.
- Environment Variables: Create a .env file to store sensitive data.

4. Running the App

- Start the Server: run npm start in your terminal to start the app.
- Access the App: Open a browser and go to http://localhost:3000.

5. API Endpoints

- /About: leads to about page.
- /: leads to home page.
- /dashboard: leads to user notes.
- /dashboard/add: create a note.
- /dashboard/item/id: specific note.
- /auth/google: login user using google.
- /logout: logout user.

6. Explanation of personal difficulties and lessons learnt

One of the first difficulties I encountered was file organization and management. I struggled many times with errors due to improper routing and folder/file arrangement, which led me to restart the project entirely out of frustration. Another issue I encountered was memory—I really struggled with remembering what to do next and what tasks I had to complete, often turning to ChatGPT for guidance. I had some difficulties connecting to MongoDB, but I eventually connected directly through VS Code without any issues. I encountered many syntax errors and often got frustrated, but I reminded myself to take a breath, take a break, and review the code with a calm mind.

This project made me realize that I need a lot more practice, and I hope to create more projects similar to this one in my spare time to continue growing my development skills and understanding.