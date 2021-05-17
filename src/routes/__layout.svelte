<main>
    <div class="container max-w-6xl mx-auto px-4 pt-5">
        <div class="container bg-white rounded-lg py-5 px-3 w-full shadow-2xl">
            <slot></slot>
        </div>
    </div>
</main>
<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    :global(body) {
        background-color: #0E1013;
        font-family: Roboto, sans-serif;
    }
</style>