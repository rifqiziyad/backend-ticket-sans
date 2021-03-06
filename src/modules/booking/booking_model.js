const connection = require('../../config/mysql')

module.exports = {
  getDataAll: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM booking', (error, result) => {
        console.log(error)
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  createData: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO booking SET ?',
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}
