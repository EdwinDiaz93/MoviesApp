<template>
    <div v-for="movie in popularMovies.results" :key="movie.id"
        class="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white shadow-2xl   ">
        <a :href="`${imageUrl}${movie.backdrop_path}`" target="_blank">
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
            <button @click="() => $emit('onAdd', movie)"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                añadir a favoritos

            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { enviroment } from '@/env'

export default defineComponent({
    props: {
        popularMovies: {
            type: Object,
            required: true
        }
    },
    emits: ['onAdd'],
    setup(props) {
        const popularMovies = computed(() => props.popularMovies);
        const imageUrl = computed(() => enviroment.imageUrl);

        return { popularMovies, imageUrl };
    }
})
</script>

<style></style>