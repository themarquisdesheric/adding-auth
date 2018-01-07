# adding-auth

A secure Express/Mongoose REST API data server with the following CRUD methods: get all, get, add new. It has: 

* Unprotected auth routes for: `signin` and `signup` and `verify` for user management that return a token on success.
* A user model that can hash passwords and also compare a subsequent password
* Middleware function that "protects" the resource route

## Testing

* Contains E2E/unit auth tests for signup and signin using Mocha and Chai.
