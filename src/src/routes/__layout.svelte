<script>
    import "../app.postcss"
    import Footer from "../components/Footer.svelte"
    import Nav from "../components/Nav.svelte"
    import {meta} from  "../stores/meta"
</script>
<main>
    <div class="container max-w-6xl mx-auto px-4 pt-5">
        <div class="container bg-white rounded-lg py-5 px-3 w-full shadow-2xl">
            <h1 class="lg:text-4xl text-2xl font-bold text-center mb-4">DriedSponges Gorillian Dollar Converter</h1>
            <p class="text-center text-lg mx-1 tracking-white leading-6">
                Our mission is to unite global markets under one currency, the Gorillian Dollar. Our experts have meticulously poked
                and prodded at our units foundation, ensuring it's perfection and sustainability for the global economy.
            </p>
            <slot></slot>
            <Footer/>
        </div>
    </div>
</main>