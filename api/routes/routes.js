import express from 'express'
import moviesRoutes from './v1/moviesRoutes.js'

export default app => {

    const v1Route = express.Router()

    moviesRoutes(v1Route)


    app.use('/v1', v1Route)

}