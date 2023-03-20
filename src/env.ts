interface enviromentInt {
    baseUrl: string;
    imageUrl: string;
    api_key: string;
}

export const enviroment: enviromentInt = {
    baseUrl: 'https://api.themoviedb.org/',
    imageUrl: 'https://image.tmdb.org/t/p/original',
    api_key: '98743f5399aa2f2accb4b0cb19be1688',
}