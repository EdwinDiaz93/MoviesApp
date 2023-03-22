import HttpFactory from '@/factory';
import { MarkResponse, PopularMovies } from '../interfaces';

class MoviesService extends HttpFactory {

    static async getFavorites(url: string): Promise<PopularMovies> {
        const response = await fetch(url);
        const result = response.json();
        return result;
    }
    static async markAsFavorite(url: string, method: string, data?: object): Promise<MarkResponse> {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(data),
            headers:{
                'content-type':'application/json',
            }
        });
        const result = await response.json();
        return result;
    }
}


export default MoviesService;