import { enviroment } from '@/env';
import HttpFactory from '@/factory';
import { MarkResponse, PopularMovies } from '../interfaces';

class MoviesService extends HttpFactory {

    static async getFavorites(page: number = 1): Promise<PopularMovies> {
        const user = JSON.parse(localStorage.getItem('user')!) || null;
        if (!user) return Promise.reject(false);

        const response = await fetch(`${enviroment.baseUrl}3/account/${user.account_id}/favorite/movies?api_key=${enviroment.api_key}&session_id=${user.session_id}&language=en-US&sort_by=created_at.asc&page=${page}`);
        const result = response.json();
        return result;
    }

    static async getPopularMovies(page: number = 1): Promise<PopularMovies> {
        const response = await fetch(`${enviroment.baseUrl}/3/movie/popular?api_key=${enviroment.api_key}&page=${page}`);
        const result = response.json();
        return result;
    }

    static async markAsFavorite(favorite: object): Promise<MarkResponse> {

        const user = JSON.parse(localStorage.getItem('user')!) || null;

        if (!user) return Promise.reject(false);

        const response = await fetch(`${enviroment.baseUrl}3/account/${user.account_id}/favorite?api_key=${enviroment.api_key}&session_id=${user.session_id}`, {
            method: 'POST',
            body: JSON.stringify(favorite),
            headers: {
                'content-type': 'application/json',
            }
        });
        const result = await response.json();
        return result;
    }
}


export default MoviesService;