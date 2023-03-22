import { MoviesState } from '../interfaces';
import { PopularMovies } from '../interfaces/popular-movies.interface';
const mutations = {
    setPopularMovies(state: MoviesState, payload: PopularMovies) {
        state.popularMovies = { ...payload };
    },
    setFavoriteMovies(state: MoviesState, payload: PopularMovies) {
        state.favoriteMovies = { ...payload }
    }
}

export default mutations;