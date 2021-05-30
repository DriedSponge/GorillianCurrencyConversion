<script>
    export let switched = false;
</script>
<button class="switch-button transition-transform transform ease-in-out duration-300" class:-rotate-180={switched}
        on:click={()=>{switched = !switched}}>
    <span class="text-2xl md:hidden"><i class="fas fa-arrow-down"></i></span>
    <span class="text-xl hidden md:inline"><i class="fas fa-arrow-right"></i></span>
</button>
<style lang="postcss" type="text/postcss">
    .switch-button {
        @apply border-none appearance-none md:my-auto my-2 font-bold text-center rounded-full h-12 w-12 bg-red-500 text-white;
    }
    .switch-button:focus{
        @apply outline-none;
    }
    .switch-button:active{
        @apply bg-red-300;
    }
</style>