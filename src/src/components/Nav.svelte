<script>
    import {page} from '$app/stores';
    let links = [
        {name:"Currency",href:"/"},
        {name:"Weight",href:"/weight"}
        ]
    let p = "/";
    page.subscribe(pg => {
      p = pg.path;
    })
</script>
<div class="justify-center flex">
    <ul>
        {#each links as link}
        <li class:live={link.href === p}>
            <a href={link.href} sveltekit:prefetch>
                {link.name}
            </a>
        </li>
        {/each}
    </ul>
</div>
<style>
    li{
        @apply transition-colors duration-500 ease-in-out float-left px-8 py-2 border-l-2 border-t-2 border-b-2;
    }
    li:last-child{
        @apply rounded-r-lg border-r-2;
    }
    li:first-child{
        @apply rounded-l-lg;
    }
    .live{
        @apply bg-blue-300;
    }
</style>