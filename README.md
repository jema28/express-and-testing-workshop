# express-and-testing-workshop
A Founders and Coders workshop to practice testing and express backend connected to a PostgresSQL DB.

Learning Outcomes
==

* Add Tests to an express backend server/API
* Learn to add tests to Express JS Routes - testing that routes work as expected and return what is expected

## Introduction

* Express routes can be tested using TDD, to create a route in express you use`express.Router`.
* This is then added to the server as follows

```js
// In Routes.js
router.get('/', (res, req) => {
  //Do Stuff
})
// In Server.js
const app = express()
app.use(routes)
```

* In this workshop you will find a `server` and `database` folder, which have been set up for you. The objective of this workshop is to write tests for a backend server which has already been setup.

* As you've seen before `Supertest` and `Tape` allow us to perform integration tests checking that the server and database are communicating properly, and calls to the server endpoints respond with the correct status codes and any data requested.

* In the server folder there is a `routes` subfolder inside of which all the servers routes have been written for you.

* Your tests will ensure that not only these functions but also the database
  queries they depend on all work together to provide the information from each
  endpoint

## Setup
* `git clone` this repository, run `npm install`.
* Set up the database:
  * Run `createdb fac-express`
  * Run `psql` or `pgcli` to enter the pg interactive terminal.
  * Enter `CREATE USER super WITH SUPERUSER PASSWORD 'password';`
  * Enter `\q` in `psql` or `pgcli` to leave the pg interactive terminal.
  * Run `npm run build:db`
* Run `npm start`. Now you can use postman or another tool to make requests to the endpoints.
* In **another** terminal pane run npm test.
* Then go to you test folder, and open `routes.test.js`
* Inside this file you will be using `tape` and `supertest`([link to the docs!!](https://github.com/visionmedia/supertest))
* The structure of your tests should be as below. Note that ```supertest``` is assigned to ```request``` as this is a convention.
  ```js
  const test = require('tape')

  test('What your tests is testing', (t) => {
      request(app)
        .get('/facsters')
        .expect(200)
        .end(function(err, res) {
          /* INSERT TAPE TESTS HERE
          Don't forget to end your test */
        })
      })
  ```
  
## Exercise

Write tests for the following endpoints. Think about the response you would want from the API.

### List of Endpoints
* `/facsters`
* `/facsters/:name` e.g. `facsters/amelie`
* `/facster/new` - This is a post request expecting an object
* `/facsters/:name/superpower`
* `/facsters/:name/hobby`

1. All routes including `/facsters` should return the expected result: 200 status code and content type JSON. 
2. First user should be 'Abdullah'
3. Should be able to get a facster by their name
4. Should be able to add a new facster
5. Should find a facster's hobbies
6. Should return a facster's superpower

## Notes / Tips
* You can test the status code (as above), the content type, and the contents of the body.
* [Postman](https://www.getpostman.com/) is a tool which allows you to test api endpoints to see what they return. It is not required for this workshop but good to keep in mind for projects.
