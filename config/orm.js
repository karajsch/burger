const connection = require("./connection");

module.exports = {
    selectAll: (table, cb) => {
        connection.query(`SELECT * FROM ${table}`, (err, results) => {
            if (err) throw err;
            cb(results)
        })
    },
    newBurger: (burger, cb) => {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)", [burger.burger_name, false], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    updateBurger: (burger_id, cb) => {
        connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [burger_id], (err, results) => {
            if (err) throw err;
            cb(results)
        })
    },
    destroyBurger: (burger, cb) => {
        connection.query("DELETE FROM burgers WHERE burger_name = ?", [burger.burger_name], (err, results) => {
            if (err) throw err;
            cb(results)
        })
    }


}