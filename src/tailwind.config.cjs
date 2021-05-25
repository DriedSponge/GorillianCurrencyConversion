module.exports = {
    mode: 'jit',
    purge: {
        content: [
            "./src/**/*.svelte",
            "./src/**/*.css"

        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
}
