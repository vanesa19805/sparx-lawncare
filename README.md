# Sparx Lawncare

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

## Description
This is a lawncare service application. In this application a user can view services offered and contact with any questions. To schedule a service the user will login and select the services required and use the calendar to see open slots.

This application was built using the **Model-View-Controller (MVC)** paradigm. Node.js and Express.js were used to create a RESTful API, React was used as the template engine, MongoDb and Mongoose ORM were used for the database, express-session and passport.js were used for authentication, socket.io was used to create the chatbox, and Calendly API was used to creat calendar.

## User Story

```md
As the owner of a lawn-care company, I want to give customers the ability to schedule jobs/consultations online.
So that when a customer logs in, they are directed to a home page & given the option to view services, schedule a day for service or live-chat with an employee for help. 
When an employee logs in,Then they will be able to view a scheduled day &/or week, view messages from customers & live-chat with customers for help.
```

## Table of Contents
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Dev Team](#dev-team)
  
## Installation

Deployed Application Link: https://evening-meadow-40236.herokuapp.com/

To run application locally:
Clone git repository and run `npm install` to install all dependencies. Launch mongod to run database and run `npm start` to start the server. Go to localhost:3001 and enjoy. 

## Technologies Used

* [Express](https://www.npmjs.com/package/express)
* [React](https://reactjs.org/docs/getting-started.html)
* [mongoDB](https://docs.mongodb.com/manual/)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [passport](https://www.npmjs.com/package/passport)
* [socket.io](https://www.npmjs.com/package/socket.io)
* [Calendly](https://developer.calendly.com/)
* [Axios](https://www.npmjs.com/package/axios)

## Usage

![Demo for Sparx Lawncare](./SparxLawncare.gif)

## Contributing
See the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## License
MIT License 

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

## Dev Team
* [Gopal Patel](https://github.com/patelg1)
* [Vanesa Gonzalez](https://github.com/vanesa19805) 
* [Kajal Patel](https://github.com/kajalpatel20)
* [Zakk Haug](https://github.com/zakklikeslamps)
* [Stephanie Murphy](https://github.com/smurphy823)

