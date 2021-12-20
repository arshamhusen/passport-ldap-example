
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#26E5B7',
      secondary: '#1DC8E2',
      white: '#FFFFFF',
      black:'#00000',
      gray: '#7A7A7A',
      lightgray: '#F6F2F2',
      parrot: '#92CC3E',
      darkGray: '#555555',
      gitHub: '#2D2D2D',
      tomato: '#FF6347'
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      height: {
        'banner' : '40rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
