<script>
    import ValueInput from "../components/ValueInput.svelte"
    import SelectOption from "../components/SelectOption.svelte"
    import SwitchButton from "../components/SwitchButton.svelte"
    import {meta} from  "../stores/meta"

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
    let description = "Our mission is to unite global markets under one currency, the Gorillian Dollar. Our experts have meticulously poked\n" +
        "                and prodded at our units foundation, ensuring it's perfection and sustainability for the global economy."
</script>
<svelte:head>
    <title>Gorillian Dollar Converter</title>
    <meta property="og:title" content="Gorillian Dollar Converter">
    <meta property="og:description" content={description}>
    <meta property="description" content={description}>
</svelte:head>
<br>
<h2 class="text-center font-bold text-lg lg:text-xl mb-3">Converting from {swapped ? convertingTo.name : "Gorillian"}
    to {!swapped ? convertingTo.name : "Gorillian"}</h2>
<div class="flex flex-row  flex-wrap md:flex-nowrap justify-center">
    <div class="mx-1 w-full my-2">
        <ValueInput bind:val={gput} place="0.00" active={!swapped} label="Enter amount of gorillian dollars" />
        <div class="w-full">
            <SelectOption bind:val={convertingTo} active={false} options={[{name:"🍌 Gorillian Dollars",value:null}]} />
        </div>
    </div>
    <div class="my-auto">
        <SwitchButton bind:switched={swapped} />
    </div>
    <div class="mx-1 w-full my-2">
        <ValueInput bind:val={oput} place="0.00" active={swapped} label="Resulting amount" />
        <div class="w-full">
            <SelectOption bind:val={convertingTo} options={currencies} />
        </div>
    </div>
</div>
