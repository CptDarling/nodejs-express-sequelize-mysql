# Express API Bearer Token Example

Certainly! When building an **Express.js** API that requires **Bearer token authentication**, you can use **JSON Web Tokens (JWT)** to secure your routes. Let's explore how to achieve this:

1. **Install Dependencies**:
   First, ensure you have **Express** and **jsonwebtoken** installed in your project. You can do this using npm:
   ```bash
   npm install express jsonwebtoken
   ```

2. **Create a Middleware for Token Authentication**:
   You'll need a middleware function to verify the JWT token sent by the client. Here's an example of how you can create this middleware:

   ```javascript
   // In a file like 'authMiddleware.js'
   const jwt = require('jsonwebtoken');

   module.exports.ensureToken = function(req, res, next) {
       const bearerHeader = req.headers['authorization'];

       if (typeof bearerHeader !== 'undefined') {
           const token = bearerHeader.split(' ')[1]; // Extract the token
           jwt.verify(token, 'your-secret-key', (err, decoded) => {
               if (err) {
                   return res.sendStatus(403); // Forbidden
               }
               req.user = decoded; // Attach user data to the request
               next(); // Proceed to the next middleware or route
           });
       } else {
           res.sendStatus(401); // Unauthorized
       }
   };
   ```

3. **Use the Middleware in Your Routes**:
   Apply the `ensureToken` middleware to the routes that require authentication. For example:

   ```javascript
   const express = require('express');
   const app = express();
   const authMiddleware = require('./authMiddleware'); // Import your middleware

   // Example route that requires authentication
   app.get('/api/userOrders', authMiddleware.ensureToken, (req, res) => {
       // If the token is valid, proceed with the request
       // You can access the user data via req.user
       // ...
       res.json({ message: 'Authenticated route' });
   });

   // Other routes...
   ```

4. **Client-Side Usage**:
   When making requests to your API, include the JWT token in the `Authorization` header as follows:

   ```
   GET /api/userOrders
   Authorization: Bearer YOUR_ACCESS_TOKEN
   ```

   Replace `YOUR_ACCESS_TOKEN` with the actual token obtained during user authentication.

Remember to replace `'your-secret-key'` with your actual secret key for signing and verifying JWT tokens. Additionally, customize the middleware to suit your specific requirements.

By following these steps, you'll have a secure Express API that uses Bearer token authentication with JWTs! 🚀

Source: Conversation with Bing, 18/04/2024
(1) JWT Bearer token authentication for Express JS - Medium. https://medium.com/ms-club-of-sliit/jwt-bearer-token-authentication-for-express-js-5e95bf4dead0.
(2) How To Use JSON Web Tokens (JWTs) in Express.js | DigitalOcean. https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs.
(3) passport/express-4.x-http-bearer-example - GitHub. https://github.com/passport/express-4.x-http-bearer-example.
(4) Securing your Express RESTful APIs using JSON web tokens.. https://medium.com/@onejohi/securing-your-express-restful-apis-using-json-web-tokens-8c2fff0f4e7f.
(5) undefined. https://example.com:4000.