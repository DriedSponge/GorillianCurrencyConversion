<script>
    export let name;
    const conversions = ["USD", "VBucks", "Fortnite Gold"]
    import TextInput from "./TextInput.svelte";
</script>
<main>
    <div class="container max-w-6xl mx-auto px-4 pt-5">
        <div class="container bg-white rounded-lg py-5 px-3 w-full shadow-lg">
            <h1 class="lg:text-4xl text-2xl font-bold text-center mb-5">{name}</h1>
            <div class="flex flex-row  flex-wrap md:flex-nowrap">
                <div class="mx-1 w-full my-2">
                    <TextInput/>
                </div>
                <div class="mx-1 my-2 w-full flex flex-row">
                    <div class="w-full">
                        <select id="conversion">
                            {#each conversions as item}
                                <option>{item}</option>
                            {/each}
                        </select>
                    </div>
                    <span class="mx-1 md:mx-2 lg:text-xl text-lg align-middle inline-block">&#8644;</span>
                    <div class="w-full">
                        <select id="conversion2">
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
        @apply transition duration-300 ease-in-out focus:ring-1 shadow-inner w-full p-1 focus:border-blue-300 rounded-md border-solid focus:outline-none text-lg ;
    }
</style>