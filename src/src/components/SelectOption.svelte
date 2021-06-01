<script>
    export let options = [{name:"Option1",value:1}];
    export let active = true;
    export let val = options[1];
</script>
<select disabled="{!active}"  bind:value={val} class="appearance-none">
    {#each options as option}
        <option value="{option}">{option.name}</option>
    {/each}
</select>
<style>
    select{
        @apply rounded-b-lg border-t-0 rounded-t-none shadow-lg;
    }
</style>