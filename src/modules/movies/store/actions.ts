import MoviesService from "@/modules/movies/services";

const actions = {
    async getPopularMovies({ commit }: any, page: number = 1) {
        const movies = await MoviesService.getPopularMovies(page);
        commit('setPopularMovies', movies);
    },
    async getFavoriteMovies({ commit }: any, page: number = 1) {
        const movies = await MoviesService.getFavorites(page);
        commit('setFavoriteMovies', movies);
    }
}

export default actions;