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
        extend: {
            textColor: ['visited'],
            backgroundColor: ['active','disabled'],
            borderColor: ['active','disabled'],
            userSelect: ['disabled'],
            width: ['hover'],
            height: ['hover'],
            borderWidth:['focus','active']
        },
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
}
