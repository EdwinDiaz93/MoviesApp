<template>
    <div class="flex flex-row h-auto flex-wrap justify-center items-center">
        <div class="basis-48 border-2">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
            <p><span class="font-semibold mr-2">Idioma:</span>{{ profileDetails.iso_639_1 }}</p>
            <p><span class="font-semibold mr-2">Username:</span>{{ profileDetails.username }}</p>
            <p><span class="font-semibold mr-2">Origen:</span>{{ profileDetails.iso_3166_1 }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getProfileDetails from '@/modules/movies/composables/getProfileDetails';

export default defineComponent({
    setup() {
        const { profileDetails, load } = getProfileDetails();
        const user = JSON.parse(localStorage.getItem('user')!) || null;
        load(user.session_id);

        return { profileDetails };
    }
});
</script>

<style></style>