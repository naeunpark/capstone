# Furnistone - Capstone Project

<!-- ABOUT THE PROJECT -->
This is the project made for IOD capstone project in 2023. 

### Built With

This project is made by below lists of main framework and plugins.

* react(https://react.com)
* node(https://node.org)
* express(https://www.npmjs.com/package/express)
* sequelize(https://www.npmjs.com/package/sequelize)
* mysql2(https://www.npmjs.com/package/mysql2)

<!-- GETTING STARTED -->
## Getting Started

Follow the instrunction to use this application.

### Prerequisites

node must be installed on your computer.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Download MySQL(https://dev.mysql.com/downloads/mysql/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/naeunpark/capstone.git
   ```
2. Create tables according tables on your local MySql server refer to the Model instance in the Backend/Models folder. 
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```js
    DB_NAME = 'ENTER YOUR API' 
    DB_USER = 'ENTER YOUR API'
    DB_PASSWORD = 'ENTER YOUR API'
    DB_HOST = 'ENTER YOUR API'
    DB_PORT = 'ENTER YOUR API'
    CORS_ORIGIN = 'ENTER YOUR API'
    SESSION_SECRET = 'ENTER YOUR API'
    SESSION_MAX_AGE = 'ENTER YOUR API'
   ```

5. Enter your API in `frontend/hooks/config.js`
   ```js
    const REACT_APP_BACKEND_API = 'ENTER YOUR API';
   ```


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [React](https://react.dev/reference/react)
* [React Router](https://reactrouter.com/en/main)
* [Sequelize](https://sequelize.org/docs/v6/getting-started/)
* [Express](https://www.npmjs.com/package/express)
* [Express-session](https://www.npmjs.com/package/express-session)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
