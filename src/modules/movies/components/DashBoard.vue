<template>
    <div class=' h-screen w-screen flex flex-row flex-wrap  '>

        <div className='basis-36 h-full shadow-lg shadow-slate-500' v-if="showBar">
            <nav-bar></nav-bar>
        </div>
        <div class='flex flex-col flex-wrap flex-1 '>
            <div class='h-auto p-4 flex flex-row flex-wrap justify-between shadow-lg shadow-slate-300'>
                <svg @click="showBar = !showBar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div class='flex flex-row flex-wrap cursor-pointer' @click="handleLogout">
                    <p class=" mr-4">{{ session }}</p>
                    <p class="font-semibold mr-2">Salir</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>

                </div>

            </div>
            <div class='flex-1  p-5 shadow-lg overflow-scroll'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';

import { ValidateLogin } from '@/modules/auth/interfaces';
import NavBar from '@/modules/movies/components/NavBar.vue'
export default defineComponent({
    components: { NavBar },
    setup() {
        const showBar = ref(true);
        const user: ValidateLogin = JSON.parse(localStorage.getItem('user')!) || '';
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
                    localStorage.removeItem('favorites');
                    push({ path: '/auth/login', replace: true });

                    Swal.fire('Hasta Pronto', '', 'success')
                }
            });

        }


        return { showBar, session, handleLogout };
    }

})
</script>

<style></style>