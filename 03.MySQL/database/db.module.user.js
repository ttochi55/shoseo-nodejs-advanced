const mysql = require('mysql');
const fs = require('fs');
const conf = require('./db.module.config');
const crypto = require('crypto');
const { world: database } = conf;

module.exports = {
  connect: function (db = database) {
    const conn = mysql.createConnection(db);
    conn.connect((error) => {
      if (error) throw error;
    });
    return conn;
  },
  query: function (options, callback = null) {
    const conn = this.connect();
    conn.query(options, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },
  select: function (callback = null) {
    const conn = this.connect();
    const options = {
      sql: `SELECT uid, uname, date_format(regDate, '%Y-%m-%d %T') AS regDate FROM users WHERE isDeleted=0 ORDER BY regDate LIMIT 10;`,
    };
    conn.query(options, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },
  insert: function (callback = null) {},
  delete: function (callback = null) {},
  update: function (callback = null) {},
  getUserInfo: function (uid, callback = null) {
    const conn = this.connect();
    const sql = `SELECT * FROM users WHERE uid LIKE ?;`;
    conn.query(sql, uid, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },
  updateUser: function (params, callback) {
    const conn = this.connect();
    const sql = `UPDATE users SET set pwd=? WHERE uid like ?;`;
    conn.query(sql, params, (error, results, fields) => {
      if (error) throw error;
      callback && callback();
    });
    conn.end();
  },
};
