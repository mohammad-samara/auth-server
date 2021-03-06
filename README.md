# LAB - 14

<!-- ## Project: Project Name Here -->
## Access Control

### Author: Mohammad Samara

### Links and Resources

* [submission PR](https://github.com/mohammad-samara/auth-server/pull/5)

### Documentation
<!-- * [jsdoc]() -->
<!-- * [swagger]()  -->

### Modules

#### `basic.js` , `500.js`, `404.js`, `mongo.js`, , `user-model.js`, `router.js`, `oauth.js`, `bearer.js`

##### Exported Values and Methods

* **`node index.js`**
  * This will start listening.
* **`router`**
  * This will send request to the user crud handler `users-model.js`
* **`users-model.js`**
  * This will connect the main crud handler `model.js` with the products schema `users-schema.js`
* **`model.js`**
  * This is the main crud handler.
* **`404.js`**
  * This will console for not exist route.
* **`500.js`**
  * This will console the server errors.
* **`basic.js`**
  * This will authinticate the login process
* **`oauth.js`**
  * This will make an authorization for the client from third-party.
* **`bearer.js`**
  * This will make an authinticate for the client when provided with token.
* **`acl.js`**
  * This will check if the user have the access capabilities based on his role to access some protected routes.

### Setup

#### `.env` requirements

PORT = 4000  
**the others will be provided on canvas**

#### How to initialize your application

* `npm init -y`
* use git,postman or sawgger to use crud methods.

#### Running the app

* `node .`
* Endpoint: `/`
* Endpoint: `/signup`
* Endpoint: `/signin`
* Endpoint: `/users`
* Endpoint: `/secret`
* Endpoint: `/secretall`
* Endpoint: `/read`
* Endpoint: `/add`
* Endpoint: `/change`
* Endpoint: `/remove`

#### Tests

* Unit Tests: `npm test`
* Lint Tests: `npm run lint`

<!-- Incomplete Tests: -->

#### UML

![UML](./assets/uml12.jpg)
![UML](./assets/uml13.jpg)
![UML](./assets/uml14.jpg)
