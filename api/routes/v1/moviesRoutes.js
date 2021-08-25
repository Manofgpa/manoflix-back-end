import moviesController from '../../controllers/moviesController.js'


export default v1Route => {

    v1Route.route('/movies')

        .get(moviesController.getMovies)
}