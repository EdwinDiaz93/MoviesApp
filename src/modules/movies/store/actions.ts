import MoviesService from "@/modules/movies/services";
import { MarkResponse, PostFavorite } from '@/modules/movies/interfaces';


const actions = {
    async getPopularMovies({ commit }: any, page: number = 1) {
        const movies = await MoviesService.getPopularMovies(page);
        commit('setPopularMovies', movies);
    },
    async getFavoriteMovies({ commit }: any, page: number = 1) {
        const movies = await MoviesService.getFavorites(page);
        commit('setFavoriteMovies', movies);
    },
    async addFavoriteMovie({ commit }: any, payload: PostFavorite) {
        const response: MarkResponse = await MoviesService.markAsFavorite(payload);
        commit('setMarkedResponse', response);
    }
}

export default actions;