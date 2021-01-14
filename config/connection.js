// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "8Zelkova8",
    database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



//Hooking project with JawsDB
if (process.envJAWSDB_URL) {
    connection = mysql.createConnection(process.env.envJAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '8Zelkova',
        database: 'burgers_db'
    });
};

connection.connect();

// Export connection for our ORM to use.
module.exports = connection;