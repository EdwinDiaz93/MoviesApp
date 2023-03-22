import { PopularMovies, MarkResponse } from '@/modules/movies/interfaces';
export interface MoviesState {
    popularMovies: PopularMovies
    favoriteMovies: PopularMovies,
    markedResponse: MarkResponse
}