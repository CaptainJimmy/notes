var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var Chirp = sequelize.define("starwars", {
            routeName: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            role: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.INTEGER
            },
            forcePoints: {
                type: Sequelize.INTEGER
            }
        );

        // Syncs with DB
        Chirp.sync();

        // Makes the Chirp Model available for other files (will also create a table)
        module.exports = Chirp;