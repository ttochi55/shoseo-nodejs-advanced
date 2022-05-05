const mysql = require('mysql2');
const fs = require('fs');
const conf = require('./db.module.config');
const { world: database } = conf;

module.exports = {
  /**
   * Connect
   * @param {*} db
   */
  connect: function (db = database) {
    const conn = mysql.createConnection(db);
    conn.connect((error) => {
      if (error) throw error;
    });
    return conn;
  },

  /**
   * CRUD
   * @param {*} sql
   * @param {*} callback
   */
  select: function (sql, callback = null) {
    const conn = this.connect();
    conn.query(sql, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },
  insert: function (settings = {}, callback = null) {
    const { table, values } = settings;
    const { multipleField, multipleValue } = this.multipleStatement(values);

    const sql = `INSERT INTO ${table}(${multipleField}) VALUES ${multipleValue};`;

    const conn = this.connect();
    conn.query(sql, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },
  delete: function (settings = {}, callback = null) {
    const { table, values } = settings;
    const { multipleValue } = this.multipleStatement(values);

    const sql = `DELETE FROM ${table} WHERE _id IN ${multipleValue};`;

    const conn = this.connect(database);
    conn.query(sql, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },
  update: function (settings = {}, callback = null) {
    const { table, values } = settings;

    const sql = `UPDATE ${table} SET lyrics='${values[0].lyrics}', title='${values[0].title}' WHERE _id=${values[0]._id};`;

    const conn = this.connect();
    conn.query(sql, (error, results, fields) => {
      if (error) throw error;
      callback && callback(results);
    });
    conn.end();
  },

  multipleStatement: function (values) {
    let field = [];
    let param = [];
    values.map((object) => {
      let value = [];
      for (const key in object) {
        if (field.indexOf(key) < 0) {
          field.push(key);
        }
        value.push(`'${object[key]}'`);
      }
      param.push(`(${value.join(',')})`);
    });
    return {
      multipleField: field.join(', '),
      multipleValue: param.join(', '),
    };
  },

  /**
   * Song
   * @param {*} uid
   * @param {*} callback
   */
  getSongData: function (uid, callback = null) {
    const sql = `SELECT * FROM song WHERE _id=${uid}`;
    this.select(sql, callback);
  },
  getSongList: function (callback = null) {
    const sql = 'SELECT * FROM song ORDER BY _id DESC LIMIT 10';
    this.select(sql, callback);
  },
  insertSong: function (options = {}, callback = null) {
    const settings = {
      table: 'song',
      ...options,
    };
    this.insert(settings, callback);
  },
  updateSong: function (options = {}, callback = null) {
    const settings = {
      table: 'song',
      ...options,
    };
    this.update(settings, callback);
  },
  deleteSong: function (options = {}, callback = null) {
    const settings = {
      table: 'song',
      ...options,
    };
    this.delete(settings, callback);
  },

  /**
   * Users
   * @param {*} options
   * @param {*} callback
   */
  insertUser: function (options = {}, callback = null) {
    const settings = {
      table: 'users',
      ...options,
    };
    this.insert(settings, callback);
  },
};
