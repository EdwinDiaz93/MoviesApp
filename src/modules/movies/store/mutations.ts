import { MoviesState, MarkResponse, PopularMovies } from '@/modules/movies/interfaces';

const mutations = {
    setPopularMovies(state: MoviesState, payload: PopularMovies) {
        state.popularMovies = { ...payload };
    },
    setFavoriteMovies(state: MoviesState, payload: PopularMovies) {
        state.favoriteMovies = { ...payload }
    },
    setMarkedResponse(state: MoviesState, payload: MarkResponse) {
        state.markedResponse = payload;
    }
}

export default mutations;