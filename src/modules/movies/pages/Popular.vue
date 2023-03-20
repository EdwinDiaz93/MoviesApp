<template>
    <div class="flex flex-wrap flex-col ">
        <div class="flex flex-row flex-wrap justify-end items-center">
            <paginator :PopularMovies="popularMovies" @on-next="nextPage" @on-prev="prevPage"></paginator>
        </div>

        <div class=" h-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2 ">
            <card :popularMovies="popularMovies" @on-add="addFavorites"></card>
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
    emits:['onAdd'],
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

        const addFavorites = (movie: Result):void => {
            // Obtenemos de localStorage
            let favoriteList: Result[] = JSON.parse(localStorage.getItem('favorites')!) || [];

            // Verificamos si ya fue seleccionada como favorita
            const existByid = favoriteList.some(movieDb => movieDb.id === movie.id);

            if (!existByid) {
                favoriteList.push(movie);
                localStorage.setItem('favorites', JSON.stringify(favoriteList));
            } else {
                favoriteList = favoriteList.filter(movieDb => movieDb.id !== movie.id);
                localStorage.setItem('favorites', JSON.stringify(favoriteList));
            }
        }

        return {
            popularMovies, imageUrl, prevPage,
            nextPage, addFavorites,
        };
    }
})
</script>

<style></style>