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

            <slot name="fav" :movie="movie"></slot>

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
    setup(props) {
        const popularMovies = computed(() => props.popularMovies);
        const imageUrl = computed(() => enviroment.imageUrl);

        return { popularMovies, imageUrl };
    }
})
</script>

<style></style>