<template>
  <div class=' h-screen flex flex-wrap flex-row justify-center items-center'>
    
    <form autoComplete='off' class=' w-auto sm:w-1/3 h-auto px-5 py-10 shadow-2xl grid grid-cols-1 gap-1'>
      <h2 class='text-center text-2xl md:text-4xl font-bold mb-2'>Login Form</h2>

      <div class='grid grid-cols-1 gap-1'>
        <label for='email' class='font-bold'>Correo:</label>
        <input id='email' type="text" placeholder='correo@correo.com'
          class='outline-slate-500 border-2 border-slate-500 px-2 py-1 rounded-md  placeholder:font-bold' />
      </div>
      <div class='grid grid-cols-1 gap-1'>
        <label for='password' class='font-bold'>Password:</label>
        <input id='password' type="password" placeholder='Contraseña'
          class='outline-slate-500 border-2 border-slate-500 px-2 py-1 rounded-md  placeholder:font-bold' />
      </div>
      <button
        class=' bg-violet-500 text-white border-violet-900 hover:text-violet-500 hover:bg-white transition-all ease-in-out duration-500 sm:w-1/2  border-2 mt-2 px-2 py-1 font-bold rounded-md'
        type='submit'>Login</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style></style>