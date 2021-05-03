module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",

    ],
    enabled: !process.env.ROLLUP_WATCH // disable purge in dev
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
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
