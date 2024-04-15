# nodejs-express-sequelize-mysql

## Tutorial

[Vue.js + Node.js + Express + MySQL example: Build a full-stack CRUD Application](https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/)

- Express is for building the Rest apis
- [body-parser](https://www.npmjs.com/package/body-parser) helps to parse the request and create the req.body object
- [cors](https://www.npmjs.com/package/cors) provides Express middleware to enable CORS with various options.

### Installing MySQL

[Chapter 2 Installing and Upgrading MySQL](https://dev.mysql.com/doc/refman/5.7/en/installing.html)

To install MySQL on WSL, you need to12:
1. Open your WSL terminal (e.g. Ubuntu).
1. Update the packages with: sudo apt update
1. Install MySQL server with: sudo apt install mysql-server
1. Confirm installation and get the version number with: mysql --version
1. Optionally, run the security script with: sudo mysql_secure_installation
1. Install MySQL client with: sudo apt install mysql-client-core-8.0 or sudo apt install mariadb-client-core-10.3

### Unit testing

[Spring Boot – Rest Controller Unit Test with @WebMvcTest](https://www.bezkoder.com/spring-boot-webmvctest/#more-11118)
