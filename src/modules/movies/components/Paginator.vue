<template>
    <nav class=" hidden sm:flex flex-row flex-wrap justify-end items-center my-4">
        <p class="mr-4"><span class="font-semibold mr-3">Showing:</span> page {{ popularMovies.page }} of {{
            popularMovies.total_pages }}</p>
        <ul class="inline-flex -space-x-px">
            <li>
                <button @click="()=>$emit('onPrev')"
                    class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous
                    Page</button>
            </li>

            <li>
                <button @click="()=>$emit('onNext')"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next
                    Page</button>
            </li>
        </ul>

    </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
    props: {
        PopularMovies: {
            type: Object,
            required: true,
        }
    },
    setup(props) {

        const popularMovies = computed(() => props.PopularMovies);
        return { popularMovies }
    }
})
</script>

<style></style>