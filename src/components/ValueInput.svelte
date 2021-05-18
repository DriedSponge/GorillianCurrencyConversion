<script>
    export let place = "Enter value...";
    export let active = true;
    export let val = 0;
</script>
<label for="input" class="hidden">Enter amount of gorillian dollars</label>
<input id="input"
       readonly={!active}
       class="rounded-t-lg rounded-b-none border-gray-100 border-2 focus:border-blue-200"
       bind:value={val}
       placeholder="{place}"
       inputmode="numeric"/>

<style lang="postcss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield !important;
    }
    input[readonly]{
        @apply bg-red-500 select-none appearance-none text-white border-red-500;
    }

    input[readonly]::placeholder{
        @apply text-white;
    }
    .nan{
        @apply border-red-300;
    }
</style>