<script>
    export let name;
    const currencies = [
        {name:"USD",sym:"$",rate:3},
        {name:"VBucks",sym:"",rate:7},
        {name:"Fortnite Gold",sym:"",rate:34},
    ]
    let convertingFrom;
    let convertingTo =  {name:"USD",sym:"$",rate:3};
    let convertFrom = 0.00;
    let convertedAmt = 0.00
    function convert(){
        console.log("test")
    }
</script>
<main>
    <div class="container max-w-6xl mx-auto px-4 pt-5">
        <div class="container bg-white rounded-lg py-5 px-3 w-full shadow-2xl">
            <h1 class="lg:text-4xl text-2xl font-bold text-center mb-3">{name}</h1>
            <br>
            <h2 class="text-center font-bold text-lg lg:text-xl mb-3">Converting from Gorillian to {convertingTo}</h2>
            <div class="flex flex-row  flex-wrap md:flex-nowrap">
                <div class="mx-1 w-full my-2">
                    <input id="input" bind:value={convertFrom} on:change={convert()} placeholder="0.00" type="number"/>
                    <div class="w-full">
                        <select disabled>
                                <option>Gorillian Dollars</option>
                        </select>
                    </div>
                </div>
                <span class="text-center select-none font-bold w-full my-1 text-2xl align-middle md:hidden">&#8645;</span>
                <span class="text-center select-none font-bold align-middle mx-2 my-auto text-xl hidden md:inline-block" >&#8644;</span>
                <div class="mx-1 w-full my-2">
                    <input id="output" value={convertFrom * convertingTo.rate} placeholder="0.00"/>
                    <div class="w-full">
                        <select bind:value={convertingTo}>
                            {#each currencies as currency}
                                <option  value="{currency}" selected="{currency.name === convertingTo}">{currency.name}</option>
                            {/each}
                        </select>
                    </div>
                </div>
            </div>
            <p class="text-center mt-4 text-gray-300 font-bold italic select-none text-sm md:text-md">In Gorilla We Trust &bull;
                <a class="underline text-gray-300 hover:text-gray-300 visited:text-gray-300" href="https://github.com/DriedSponge/GorillianCurrencyConversion" target="_blank">GitHub</a></p>
        </div>
    </div>
</main>
<style lang="postcss" global>
    body {
        background-color: #0E1013;
    }

    select, input {
        @apply transition duration-300 ease-in-out focus:ring-1 w-full p-1 focus:border-blue-300 border-solid focus:outline-none text-lg;
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
    a:visited{

    }
</style>