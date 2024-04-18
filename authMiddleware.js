// AI Generated
const jwt = require("jsonwebtoken")

module.exports.ensureToken = function(req, res, next) {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1] // Extract the token
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
      if (err) {
        return res.sendStatus(403) // Forbidden
      }
      req.user = decoded // Attach user data to the request
      next() // Proceed to the next middleware or route
    })
  } else {
    res.sendStatus(401) // Unauthorised
  }
}