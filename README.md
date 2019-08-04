# express-and-testing-workshop
A Founders and Coders workshop to teach testing and express backend connected to a PostgresSQL DB.


Learning Outcomes
==

* Add Tests to an express backend server/API
* Learn to add tests to Express JS Routes - testing that routes work as expected and return what is expected

## Introduction

* Express routes can be tested using TDD, to create a route in express you use
  `express.Router`.
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

* In this workshop you will find a `server` and `database` folder, which have been set up for you, so you should not have to change any code in these folders but feel free to have a look.

* The objective of this workshop is to write integration tests for a backend
  server which has already been setup. 'Integration tests' are tests that check the correct functioning of several interconnected functions all working together.

* `Supertest` and `Tape` allow us to perform integration tests checking that the Server and Database are communicating properly, and calls to the Server endpoints respond with the correct status codes and any data requested.

* In the server folder there is a `routes` subfolder inside of which all the
  servers routes have been written for you (using promises).

* Your tests will ensure that not only these functions but also the database
  queries they depend on all work together to provide the information from each
  endpoint

## List of Endpoints
* `/facsters`
* `/facsters/:name` e.g. `facsters/amelie`
* `/facster/new` - This is a post request expecting an object
* `/facsters/:name/superpower`
* `/facsters/:name/hobby`

## Tasks
* `git clone` this repository, run `npm install`.
* Set up the database:
  * Run `createdb fac-express`
  * Run `psql` or `pgcli` to enter the pg interactive terminal.
  * Enter `CREATE USER super WITH SUPERUSER PASSWORD 'password';`
  * Enter `\q` in `psql` or `pgcli` to leave the pg interactive terminal.
  * Run `npm run build:db`
* Run `npm start`.
* Then go to you test folder, and open `routes.test.js`. In here you will be using `tape` and `supertest`.
* Tape allows you to make assertions and check that things are equal
  etc. `supertest` will allow you to make requests to your server and expect
  certain results, and also has some limited assertion/testing functionality.
* The structure of your tests should be as below. Note that ```supertest``` is assigned to ```request``` as this is a convention.

  ```js
  const test = require('tape')
  const request = require('supertest')

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
* Check your tests are working by running `run npm test`.

## Notes / Tips
* What should you test?
  - Think about what response you would want from the API and see if you can test that. 
    For example, you might test the status code (as above), the content type, and the contents of the body.
  - Make sure you write tests for each route, and test each response thoroughly.
* [Postman](https://www.getpostman.com/) is a tool which allows you to test api endpoints to see what they return. It is not required for this workshop but good to keep in mind for projects.
