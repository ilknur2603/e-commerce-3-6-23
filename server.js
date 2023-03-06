const express = require('express');
const routes = require('./routes');
// import sequelize connection
console.log("before sequelize");
const sequelize = require("./config/connection")



const app = express();
//require("./seeds");

const PORT = process.env.PORT || 3001;
console.log("after port");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(routes);
console.log("after routes");
// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

app.listen(PORT, () => {
  console.log(`you are listening port ${PORT}`)
})


