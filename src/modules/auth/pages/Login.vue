<template>
  <div class=' h-screen flex flex-wrap flex-row justify-center items-center'>

    <form @submit.prevent="handleSubmit" autoComplete='off'
      class=' w-auto sm:w-1/3 h-auto px-5 py-10 shadow-2xl grid grid-cols-1 gap-1'>
      <h2 class='text-center text-2xl md:text-4xl font-bold mb-2'>Login Form</h2>      
      <p v-if="loginError.status" class="font-semibold text-center text-red-500">{{ loginError.message }}</p>
      <div class='grid grid-cols-1 gap-1'>
        <label for='email' class='font-bold'>Username:</label>
        <input v-model="user.username" id='email' type="text" placeholder='correo@correo.com'
          class='outline-slate-500 border-2 border-slate-500 px-2 py-1 rounded-md  placeholder:font-bold' />
      </div>
      <div class='grid grid-cols-1 gap-1'>
        <label for='password' class='font-bold'>Password:</label>
        <input id='password' type="password" placeholder='Contraseña'
          class='outline-slate-500 border-2 border-slate-500 px-2 py-1 rounded-md  placeholder:font-bold'
          v-model="user.password" />
      </div>
      <button
        class=' bg-violet-500 text-white border-violet-900 hover:text-violet-500 hover:bg-white transition-all ease-in-out duration-500 sm:w-1/2  border-2 mt-2 px-2 py-1 font-bold rounded-md'
        type='submit'>Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { LoginCredentials } from '@/modules/auth/interfaces'
const store = useStore();
const { push } = useRouter();

const user = ref<LoginCredentials>({
  username: '',
  password: '',
});

const handleSubmit = async() => {
 await store.dispatch('auth/login', user.value);  
  push({ path: '/movies/popular', replace: true });
}

const loginError = computed(() => store.state.auth.loginError);

</script>

<style></style>