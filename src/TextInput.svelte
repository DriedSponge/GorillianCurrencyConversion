<script>
    export let label = "Text Input";
    export let tag ="forminput";
</script>
<div class="mx-1">
    <label for="{tag}" class="text-lg">{label}</label>
    <input id="{tag}" class="transition
    duration-300
     ease-in-out
      focus:ring-1
      shadow-inner
       w-full p-1
       rounded-md
       border-solid
       focus:outline-none"
    />
</div>