<script>
    import ValueInput from "../components/ValueInput.svelte"
    import SelectOption from "../components/SelectOption.svelte"
    import SwitchButton from "../components/SwitchButton.svelte"
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
            gput = isNaN(oput) ? "Invalid Input" : oput / convertingTo.rate
        } else {
            oput = isNaN(gput) ? "Invalid Input" : gput * convertingTo.rate
        }
    }
</script>
<svelte:head>
    <title>Gorillian Dollar Converter</title>
</svelte:head>
<h1 class="lg:text-4xl text-2xl font-bold text-center mb-3">DriedSponges Gorillian Dollar Converter R</h1>
<br>
<h2 class="text-center font-bold text-lg lg:text-xl mb-3">Converting from {swapped ? convertingTo.name : "Gorillian"}
    to {!swapped ? convertingTo.name : "Gorillian"}</h2>
<div class="flex flex-row  flex-wrap md:flex-nowrap justify-center">
    <div class="mx-1 w-full my-2">
        <ValueInput bind:val={gput} place="0.00" active={!swapped} lable="Enter amount of gorillian dollars" />
        <div class="w-full">
            <SelectOption bind:val={convertingTo} active={false} options={[{name:"🍌 Gorillian Dollars",value:null}]} />
        </div>
    </div>
    <div class="my-auto">
        <SwitchButton bind:switched={swapped} />
    </div>
    <div class="mx-1 w-full my-2">
        <ValueInput bind:val={oput} place="0.00" active={swapped} lable="Resulting amount" />
        <div class="w-full">
            <SelectOption bind:val={convertingTo} options={currencies} />
        </div>
    </div>
</div>
<p class="text-center mt-4 text-gray-300 font-bold italic select-none text-sm md:text-md">In Banana We Trust &bull;
    <a class="underline text-gray-300 hover:text-gray-300 visited:text-gray-300"
       href="https://github.com/DriedSponge/GorillianCurrencyConversion" target="_blank">GitHub</a></p>
<style lang="postcss">
    select{
        @apply rounded-b-lg border-t-0 rounded-t-none shadow-lg;
    }
</style>