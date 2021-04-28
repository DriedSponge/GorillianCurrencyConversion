<script>
import  Home from "./Home.svelte"
export let name;
</script>
<Home name="{name}" />
<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>