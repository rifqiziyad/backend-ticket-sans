const connection = require('../../config/mysql')

module.exports = {
  getDataAll: (limit, offset, search, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM movie WHERE movie_name LIKE '%${search}%' ORDER BY ${sort} LIMIT ? OFFSET ?`,
        [limit, offset],
        (error, result) => {
          console.log(error)
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataCount: (search) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM movie WHERE movie_name LIKE '%${search}%'`,
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  getDataById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM movie WHERE movie_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  createData: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO movie SET ?', setData, (error, result) => {
        // !error ? resolve({id: result.inserId, ...setData}) : reject(new Error(error))
        // console.log(error);
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  updateData: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE movie SET ? WHERE movie_id = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id: id,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM movie WHERE movie_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
