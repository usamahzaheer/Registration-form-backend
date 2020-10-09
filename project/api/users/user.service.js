// In this file i have define following services 
// create
// getUser
// getUserByUserId
// getUserByUserEmail
// updateUser
// deleteUser

//importing pool for running query
const pool = require("../../config/database");
const { getUserByUserId, deleteUser } = require("./user.controller");

module.exports = {
  // defining a method create which will receive data from controller and a callback 
  create: (data, callBack) => {
    pool.query(
      `insert into signup (firstName, lastName,  email, password)   
                values(?,?,?,?)`, 
                //giving values that user will pass at run time 
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password

      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);

      });
  },

  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from  signup where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstName,lastName,email from signup where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,firstName,lastName,email from  signup`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update  signup set firstName=?, lastName=?, email=?, password=? where id = ?`,
      [
        data.first_name,
        data.last_name,

        data.email,
        data.password,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from  signup where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
