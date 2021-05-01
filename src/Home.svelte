<script>
    export let name;
    const currencies = [
        {name:"USD",sym:"$",rate:3},
        {name:"VBucks",sym:"",rate:7},
        {name:"Fortnite Gold",sym:"",rate:34},
    ]
    let convertingTo =  {name:"USD",sym:"$",rate:3};
    let oput = 0;
    let gput = 0;
    let swapped = false;
    $:{
        if(swapped){
            gput = oput / convertingTo.rate
        }else{
            oput = gput * convertingTo.rate
        }
    }
</script>
<main>
    <div class="container max-w-6xl mx-auto px-4 pt-5">
        <div class="container bg-white rounded-lg py-5 px-3 w-full shadow-2xl">
            <h1 class="lg:text-4xl text-2xl font-bold text-center mb-3">{name}</h1>
            <br>
            <h2 class="text-center font-bold text-lg lg:text-xl mb-3">Converting from {swapped ? convertingTo.name : "Gorillian"} to {!swapped ? convertingTo.name : "Gorillian"}</h2>
            <div class="flex flex-row  flex-wrap md:flex-nowrap justify-center">
                <div class="mx-1 w-full my-2">
                    <label for="input" class="hidden">Enter amount of gorillian dollars</label>
                    <input disabled={swapped} id="input" bind:value={gput} placeholder="0.00" type="number"/>
                    <div class="w-full">
                        <select disabled class="appearance-none">
                                <option>🍌 Gorillian Dollars</option>
                        </select>
                    </div>
                </div>
                <button class="appearance-none my-auto font-bold text-center transform transition duration-300 ease-in-out rounded-full h-12 w-12" class:-rotate-180={swapped} on:click={()=>{swapped = !swapped}}>
                    <span class="text-2xl md:hidden">&#8595;</span>
                    <span class="text-xl hidden md:inline">&#8594;</span>
                </button>
                <div class="mx-1 w-full my-2">
                    <label for="output" class="hidden">Resulting amount</label>
                    <input disabled={!swapped} id="output" bind:value={oput} placeholder="0.00"/>
                    <div class="w-full">
                        <select bind:value={convertingTo} class="appearance-none">
                            {#each currencies as currency}
                                <option  value="{currency}" selected="{currency.name === convertingTo}">{currency.name}</option>
                            {/each}
                        </select>
                    </div>
                </div>
            </div>
            <p class="text-center mt-4 text-gray-300 font-bold italic select-none text-sm md:text-md">In Banana We Trust &bull;
                <a class="underline text-gray-300 hover:text-gray-300 visited:text-gray-300" href="https://github.com/DriedSponge/GorillianCurrencyConversion" target="_blank">GitHub</a></p>
        </div>
    </div>
</main>
<style lang="postcss" global>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    body {
        background-color: #0E1013;
        font-family: Roboto, sans-serif;
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