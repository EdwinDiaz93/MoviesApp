interface enviromentInt {
    baseUrl: string;
    imageUrl: string;
    api_key: string;
}
export const enviroment: enviromentInt = {
    baseUrl: process.env.VUE_APP_BASEURL,
    imageUrl: process.env.VUE_APP_IMAGEURL,
    api_key: process.env.VUE_APP_API_KEY,
}