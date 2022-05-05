const mysql = require('mysql');
const config = require('../config/database.json');
const fs = require('fs');
const { world: database } = JSON.parse(config);

module.exports = {
  connect: function (db = database) {
    const conn = mysql.createConnection(db);
    conn.connect((error) => {
      if (error) throw error;
    });
    return conn;
  },
  connectPool: function (db = database) {},
  query: function (options, callback = null) {
    const conn = this.connect();
    conn.query(options, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },
  select: function (data = [], callback = null) {},
  insert: function (data = [], callback = null) {},
  delete: function (data = [], callback = null) {},
  update: function (data = [], callback = null) {},
};
