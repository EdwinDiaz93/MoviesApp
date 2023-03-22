import HttpFactory from '@/factory';

const MoviesService: HttpFactory = {

    get: function <T>(method: string, url: string, data?: object | undefined): Promise<T> {
        throw new Error('Function not implemented.');
    },
    post: function <T>(method: string, url: string, data?: object | undefined): Promise<T> {
        throw new Error('Function not implemented.');
    }
};


export default MoviesService;