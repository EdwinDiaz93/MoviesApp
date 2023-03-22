<template>
    <div class="flex flex-wrap flex-col ">
        <div v-if="favoriteMovies.results.length"
            class=" h-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2 ">
            <card :popularMovies="favoriteMovies">
                <template #fav="{ movie }">
                    <button @click="() => removeFavorites(movie)"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-2 bg-red-600 rounded-md hover:text-red-600 hover:border-red-600 hover:bg-white transition-all ease-out duration-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        Eliminar de favoritos
                    </button>
                </template>
            </card>
        </div>
        <p v-else class="text-center text-4xl font-semibold ">There is no favorites in the list</p>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { enviroment } from "@/env";
import { Result} from '@/modules/movies/interfaces';

import Card from '@/modules/movies/components/Card.vue';
import Swal from "sweetalert2";

const imageUrl = computed(() => enviroment.imageUrl);
const store = useStore();

store.dispatch('movies/getFavoriteMovies');

const favoriteMovies = computed(() => store.state.movies.favoriteMovies);

const removeFavorites = (movie: Result): void => { console.log('hey'); }

</script>

<style></style>