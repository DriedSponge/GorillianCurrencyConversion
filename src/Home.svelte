<script>
    export let name;
    const conversions = ["USD", "VBucks", "Fortnite Gold"]
</script>
<main>
    <div class="container max-w-6xl mx-auto px-4 pt-5">
        <div class="container bg-white rounded-lg py-5 px-3 w-full shadow-lg">
            <h1 class="lg:text-4xl text-2xl font-bold text-center mb-5">{name}</h1>
            <div class="flex flex-row  flex-wrap md:flex-nowrap">
                <div class="mx-1 w-full my-2">
                    <input id="input" type="number"/>
                    <div class="w-full">
                        <select>
                            {#each conversions as item}
                                <option>{item}</option>
                            {/each}
                        </select>
                    </div>
                </div>
                <span class="text-center font-bold w-full my-1 text-2xl align-middle md:hidden" >&#8645;</span>
                <span class="text-center  font-bold align-middle mx-2 my-auto text-xl hidden md:inline-block" >&#8644;</span>
                <div class="mx-1 w-full my-2">
                    <input id="output" type="number"/>
                    <div class="w-full">
                        <select>
                            {#each conversions as item}
                                <option>{item}</option>
                            {/each}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<style lang="postcss" global>
    body {
        background-color: #0E1013;
    //background-image: url("https://i.driedsponge.net/file/5qFniR6TmJVupgcJPUbU.png"); background-repeat: repeat;
        padding: 0;
        color: #363636;
    }

    select, input {
        @apply transition duration-300 ease-in-out focus:ring-1 w-full p-1 focus:border-blue-300 border-solid focus:outline-none text-lg ;
    }
    input {
        @apply rounded-t-lg;
    }
    select{
        @apply rounded-b-lg border-t-0;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>