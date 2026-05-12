export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],

  theme: {
    extend: {
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      }
    },
  },

  plugins: [],
}
