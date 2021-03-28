const commons = {
  // Breakpoints
  breakpoints: {
    keys: ['span', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: {
      span: 0,
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1920,
    },
  },

  // transition
  transition: {
    fast: 'all ease .2s',
    normal: 'all ease .3s',
    slow: 'all ease .4s',
  },

  // common colors
  commonColor: {
    badge: '#ff486d',
    online: '#39a635',
  },
};

const theme = {
  // Note: light theme
  lightTheme: {
    ...commons,
    // type theme
    isLight: true,

    // Pallet color
    color: {
      primary: '#fafafa',
      secondary: '#f0f1f2',
      textPrim: '#1e1e1e',
      textSec: '#878889',
      twoTone: '#0088ff',
      twoToneActive: 'rgb(170, 204, 255, .6)',
    },
  },

  // Note: dark theme
  darkTheme: {
    ...commons,
    // type theme
    isLight: false,

    // Pallet color
    color: {
      primary: '#232425',
      secondary: '#3a3b3c',
      textPrim: '#e5e6e7',
      textSec: '#aaabac',
      twoTone: '#0088ff',
      twoToneActive: 'rgb(46, 136, 255, 0.2)',
    },
  },
};

export default theme;
