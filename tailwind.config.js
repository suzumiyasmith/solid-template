module.exports = {
  content: [
    'index.html', 
    'src/**/*.js',
    'src/**/*.jsx'
  ],
  theme: {},
  variants: {},
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'retro'
    ]
  }
};
