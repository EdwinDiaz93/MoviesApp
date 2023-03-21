<template>
    <div class="flex flex-wrap flex-col ">
        <div class="flex flex-row flex-wrap justify-end items-center">
            <paginator :PopularMovies="popularMovies" @on-next="nextPage" @on-prev="prevPage"></paginator>
        </div>

        <div class=" h-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2 ">
            <card :popularMovies="popularMovies" >
                <template #fav="{ movie }">

                    <button @click="() => addFavorites(movie)"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        añadir a favoritos

                    </button>
                </template>
            </card>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import Paginator from '@/modules/movies/components/Paginator.vue';
import Card from '@/modules/movies/components/Card.vue';

import { enviroment } from '@/env';
import { Result } from '@/modules/movies/interfaces'
import getPopularMovies from '@/modules/movies/composables/getPopularMovies';

export default defineComponent({
    components: {
        paginator: Paginator,
        card: Card,
    },
    setup() {
        const { popularMovies, load } = getPopularMovies();

        load();

        const imageUrl = computed(() => enviroment.imageUrl);

        const prevPage = async () => {
            if (popularMovies.value.page === 1) return;
            await load(--popularMovies.value.page);
        }
        const nextPage = async () => {
            if (popularMovies.value.page === popularMovies.value.total_pages) return;
            await load(++popularMovies.value.page);
        }

        const addFavorites = (movie: Result): void => {
            // Obtenemos de localStorage
            let favoriteList: Result[] = JSON.parse(localStorage.getItem('favorites')!) || [];

            // Verificamos si ya fue seleccionada como favorita
            const existByid = favoriteList.some(movieDb => movieDb.id === movie.id);

            if (!existByid) {
                favoriteList.push(movie);
                localStorage.setItem('favorites', JSON.stringify(favoriteList));
            }

        }

        return {
            popularMovies, imageUrl, prevPage,
            nextPage, addFavorites,
        };
    }
});
</script>

<style></style>