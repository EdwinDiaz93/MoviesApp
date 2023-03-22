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

<script lang="ts" setup>

import { Profile } from '@/modules/auth/interfaces';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('auth/getProfile');
const profileDetails = computed<Profile>(() => store.state.auth.profile);
</script>

<style></style>