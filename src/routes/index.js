const express = require('express')
const Route = express.Router()
const movieRouter = require('../modules/movie/movie_routes')
const locationRouter = require('../modules/location/loc_routes')
const premiereRouter = require('../modules/premiere/premiere_routes')
const timeRouter = require('../modules/show time/time_routes')
const bookingRouter = require('../modules/booking/booking_routes')
const authRouter = require('../modules/auth/auth_routes')
const userRouter = require('../modules/user/user_routes')
const profileRouter = require('../modules/Profile/profile_routes')
const filterRouter = require('../modules/dashboard filter/filter_routes')
const orderRouter = require('../modules/orders/orders_routes')
// [1]
// Route.get('/hello', (req, res) => {
//   res.status(200).send('Hello World')
// })

// [2]
Route.use('/movie', movieRouter)
Route.use('/location', locationRouter)
Route.use('/premiere', premiereRouter)
Route.use('/time', timeRouter)
Route.use('/booking', bookingRouter)
Route.use('/auth', authRouter)
Route.use('/user', userRouter)
Route.use('/profile', profileRouter)
Route.use('/filter', filterRouter)
Route.use('/orders', orderRouter)

module.exports = Route
