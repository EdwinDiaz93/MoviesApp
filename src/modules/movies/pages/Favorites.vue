<template>
    <div class="flex flex-wrap flex-col ">
        <div class="flex flex-row flex-wrap justify-end items-center">
            <paginator :PopularMovies="favoriteMovies" @on-next="nextPage" @on-prev="prevPage"></paginator>
        </div>
        <div v-if="favoriteMovies.results.length"
            class=" h-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2 ">
            <card :popularMovies="favoriteMovies" />
        </div>
        <p v-else class="text-center text-4xl font-semibold ">There is no favorites in the list</p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

import Card from '@/modules/movies/components/Card.vue';
import Paginator from '@/modules/movies/components/Paginator.vue';

const store = useStore();

store.dispatch('movies/getFavoriteMovies');

const favoriteMovies = computed(() => store.state.movies.favoriteMovies);

const prevPage = () => {
    if (favoriteMovies.value.page === 1) return;
    store.dispatch('movies/getFavoriteMovies', --favoriteMovies.value.page);
}
const nextPage = () => {
    if (favoriteMovies.value.page === favoriteMovies.value.total_pages || favoriteMovies.value.page === 1) return;
    store.dispatch('movies/getFavoriteMovies', ++favoriteMovies.value.page);
}


</script>

<style></style>