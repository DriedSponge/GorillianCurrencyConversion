<script>
    export let place = "Enter value...";
</script>
<label for="input" class="hidden">Enter amount of gorillian dollars</label>
<input id="input" class="rounded-t-lg rounded-b-none border-gray-100 border-2 active:border-blue-200"  placeholder="{place}" type="number"/>

<style lang="postcss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>