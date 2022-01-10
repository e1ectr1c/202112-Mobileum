const { Sequelize } = require('sequelize');
const { getEnv } = require('../utils/env');

//create a connection
const url = getEnv("DB_URL");

let sequelize = null;
//if url exists it gets preference from dbName, dbHost
if (url) {
    sequelize = new Sequelize(url);
}
else {
    const username = getEnv('DB_USER');
    const password = getEnv('DB_PASSWORD');
    const dbName = getEnv('DB_NAME');
    const host = getEnv('DB_HOST');
    const dialect = getEnv('DB_DIALECT');
    sequelize = new Sequelize(dbName, username, password, {
        host,
        dialect,
    });

}



module.exports = {
    Sequelize,
    sequelize
};