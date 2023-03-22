import { MoviesState } from '../interfaces';

const state: MoviesState = {
    popularMovies: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
    },
    favoriteMovies: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
    },
    markedResponse: {
        status_code: 0,
        status_message: ''
    }
};

export default state;