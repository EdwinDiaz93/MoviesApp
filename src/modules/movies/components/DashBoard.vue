<template>
    <div className=' h-screen w-screen flex flex-row flex-wrap  '>

        <div className='basis-36 h-full shadow-lg shadow-slate-500'>
            <nav-bar></nav-bar>
        </div>
        <div className='flex flex-col flex-wrap flex-1 '>
            <div className='h-auto p-4 flex flex-row flex-wrap justify-between shadow-lg shadow-slate-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div className='flex flex-row flex-wrap'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>
            <div className='flex-1  p-5 shadow-lg overflow-scroll'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/modules/movies/components/NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style></style>