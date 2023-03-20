<template>
    <div class=" h-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2 ">

        <div v-for="movie in popularMovies.results" :key="movie.id"
            class="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white shadow-2xl   ">
            <a :href="`${imageUrl}${movie.backdrop_path}`">
                <img class="rounded-t-lg" :src="`${imageUrl}${movie.backdrop_path}`" :alt="movie.title" />
            </a>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-violet-900 ">{{ movie.title }}</h5>
                <p class="mb-3 font-normal text-gray-700 ">{{ movie.overview }}.</p>

                <p class="mb-3  font-normal text-gray-700 "> <span class="font-bold mr-2">Release
                        Date:</span> {{
                            movie.release_date }}</p>

                <p class="mb-3  font-normal text-gray-700 "> <span class="font-bold mr-2">Rating:</span>
                    {{
                        movie.vote_average }}</p>

                <p class="mb-3  font-normal text-gray-700 "> <span class="font-bold mr-2">Votes:</span> {{
                    movie.vote_count }}</p>
                <a href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import getPopularMovies from '@/modules/movies/composables/getPopularMovies';
import { enviroment } from '@/env';

export default defineComponent({
    setup() {
        const { popularMovies, error, load } = getPopularMovies();
        load();

        const imageUrl = computed(() => enviroment.imageUrl);

        return { popularMovies, imageUrl };
    }
})
</script>

<style></style>