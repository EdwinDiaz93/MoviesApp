import { ref } from 'vue';
import { enviroment } from '@/env';
import { PopularMovies } from '@/modules/movies/interfaces';

const getPopularMovies = () => {

    const popularMovies = ref<PopularMovies>({
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
    });

    let error = ref(null);

    const load = async () => {
        try {
            const response = await fetch(`${enviroment.baseUrl}/3/movie/popular?api_key=${enviroment.api_key}`);
            if (!response.ok) {
                throw Error('Data not available');
            }
            const data: PopularMovies = await response.json();
            popularMovies.value = { ...data };
            console.log(popularMovies.value);
        } catch (err: any) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { popularMovies, error, load };
}

export default getPopularMovies