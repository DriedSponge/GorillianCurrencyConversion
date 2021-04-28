<script>
    export let name;
    const conversions = ["USD","VBucks","Fortnite Gold"]
    import TextInput from "./TextInput.svelte";
</script>
<main class="bg-blend-darken">
    <h1 class="text-black text-4xl font-bold text-center mb-5">{name}</h1>
    <div class="container lg:w-3/5 mx-auto">
        <div class="grid lg:grid-cols-3 sm:grid-cols-3">
            <TextInput label="Amount of Gorillian Dollars:" tag="gorillian"/>
            <div class="mx-1">
                <label for="conversion">Convert To:</label>
                <select id="conversion" class="w-full">
                    {#each conversions as item}
                        <option>{item}</option>
                    {/each}
                </select>
            </div>
            <TextInput label="Converted Amount:" tag="converted"/>
        </div>
    </div>
</main>
