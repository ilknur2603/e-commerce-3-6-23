require('dotenv').config();


//Use Sequelize
const Sequelize = require('sequelize');
let sequelize;
try{
sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
}catch(err){
  console.error('Unable to connect to the database:', err);
}
console.log("sequelize didnt get error")
/*sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
*/
module.exports = sequelize;
