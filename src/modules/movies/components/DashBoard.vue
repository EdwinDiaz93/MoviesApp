<template>
    <div class=' h-screen w-screen flex flex-row flex-wrap  '>

        <div className='basis-36 h-full shadow-lg shadow-slate-500' v-if="showBar">
            <nav-bar></nav-bar>
        </div>
        <div class='flex flex-col flex-wrap flex-1 '>
            <div class='h-auto p-4 flex flex-row flex-wrap justify-between shadow-lg shadow-slate-300'>
                <div class="flex flex-wrap flex-row">
                    <svg @click="showBar = !showBar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>


                    <button class="hidden sm:flex ml-5  text-violet-600 px-1 font-bold" @click="showProfile">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Perfil
                    </button>
                </div>

                <div class='flex flex-row flex-wrap '>
                    <p class=" mr-4">{{ session }}</p>
                    <div class="flex flex-row flex-wrap cursor-pointer text-violet-600" @click="handleLogout">
                        <p class="font-semibold mr-2">Salir</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                    </div>

                </div>

            </div>
            <div class='flex-1  p-5 shadow-lg overflow-scroll'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import Swal from 'sweetalert2';

import NavBar from '@/modules/movies/components/NavBar.vue'

const showBar = ref(true);

const user = JSON.parse(localStorage.getItem('user')!) || null;
const session = computed(() => user.username);

const { push } = useRouter();

const handleLogout = () => {
    Swal.fire({
        title: 'Do you realy want sign out from de movie app?',
        showCancelButton: true,
        confirmButtonText: 'Salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('user');
            push({ path: '/auth/login', replace: true });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'See you later',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

}

const showProfile = () => {
    push({ name: 'profile' });
}


</script>

<style></style>