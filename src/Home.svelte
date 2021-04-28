<script>
    export let name;
    const conversions = ["USD", "VBucks", "Fortnite Gold"]
    import TextInput from "./TextInput.svelte";
</script>
<main>
    <div class="container max-w-6xl mx-auto px-4 pt-5">
        <div class="container bg-white rounded-lg py-5 px-3 w-full shadow-lg">
            <h1 class="text-4xl font-bold text-center mb-5">{name}</h1>
            <div class="container">
                <div class="grid md:grid-cols-2">
                    <div class="mx-1">
                        <label for="conversion">Convert To:</label>
                        <select id="conversion" class="w-full">
                            {#each conversions as item}
                                <option>{item}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="mx-1">
                        <label for="conversion2">Convert From:</label>
                        <select id="conversion2" class="w-full">
                            {#each conversions as item}
                                <option>{item}</option>
                            {/each}
                        </select>
                    </div>
                    <TextInput label="Input" />
                    <TextInput label="Output" />
                </div>
            </div>
        </div>
    </div>
</main>
<style lang="postcss" global>
    body {
        background-color: #0E1013;
        //background-image: url("https://i.driedsponge.net/file/5qFniR6TmJVupgcJPUbU.png");
        background-repeat: repeat;
        padding: 0;
        color: #363636;
    }
</style>