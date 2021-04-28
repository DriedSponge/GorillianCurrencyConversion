<script>
    export let label = null;
    export let tag ="forminput";
</script>
{#if label}
    <label for="{tag}" class="text-lg">{label}</label>
{/if}
<input id="{tag}" type="number"/>

<style lang="scss">
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>