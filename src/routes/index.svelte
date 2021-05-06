<script>
    const currencies = [
        {name: "USD", sym: "$", rate: 3},
        {name: "VBucks", sym: "", rate: 7},
        {name: "Fortnite Gold", sym: "", rate: 34},
    ]
    let convertingTo = {name: "USD", sym: "$", rate: 3};
    let oput = 0;
    let gput = 0;
    let swapped = false;
    $:{
        if (swapped) {
            gput = oput / convertingTo.rate
        } else {
            oput = gput * convertingTo.rate
        }
    }
</script>
<svelte:head>
    <title>Gorillian Dollar Converter</title>
</svelte:head>
<h1 class="lg:text-4xl text-2xl font-bold text-center mb-3">DriedSponges Gorillian Dollar Converter</h1>
<br>
<h2 class="text-center font-bold text-lg lg:text-xl mb-3">Converting from {swapped ? convertingTo.name : "Gorillian"}
    to {!swapped ? convertingTo.name : "Gorillian"}</h2>
<div class="flex flex-row  flex-wrap md:flex-nowrap justify-center">
    <div class="mx-1 w-full my-2">
        <label for="input" class="hidden">Enter amount of gorillian dollars</label>
        <input readonly={swapped} id="input" bind:value={gput} placeholder="0.00" type="number"/>
        <div class="w-full">
            <select disabled class="appearance-none">
                <option>🍌 Gorillian Dollars</option>
            </select>
        </div>
    </div>
    <div class="my-auto">
        <button class="switch-button transition-transform transform ease-in-out duration-300" class:-rotate-180={swapped}
                on:click={()=>{swapped = !swapped}}>
            <span class="text-2xl md:hidden"><i class="fas fa-arrow-down"></i></span>
            <span class="text-xl hidden md:inline"><i class="fas fa-arrow-right"></i></span>
        </button>
    </div>

    <div class="mx-1 w-full my-2">
        <label for="output" class="hidden">Resulting amount</label>
        <input readonly={!swapped} id="output" bind:value={oput} placeholder="0.00" type="number"/>
        <div class="w-full">
            <select bind:value={convertingTo} class="appearance-none">
                {#each currencies as currency}
                    <option value="{currency}" selected="{currency.name === convertingTo}">{currency.name}</option>
                {/each}
            </select>
        </div>
    </div>
</div>
<p class="text-center mt-4 text-gray-300 font-bold italic select-none text-sm md:text-md">In Banana We Trust &bull;
    <a class="underline text-gray-300 hover:text-gray-300 visited:text-gray-300"
       href="https://github.com/DriedSponge/GorillianCurrencyConversion" target="_blank">GitHub</a></p>
<style lang="postcss">
    @import "./converter.css";
</style>