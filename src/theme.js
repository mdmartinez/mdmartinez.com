const theme = {
  breakpoints: ['32em', '48em', '64em', '80em'],
  fonts: {
    display: '"DIN Next Rounded LT", "Helvetica Neue", system-ui, sans-serif',
    sans: '"Avenir Next","Fira Sans", "Helvetica Neue", system-ui, sans-serif',
    mono: '"Fira Code", "SF Mono", "Roboto Mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  lineHeights: [1.2, 1.3, 1.4, 1.5],
  fontWeights: {
    light: 300,
    normal: 400,
    demi: 600,
    bold: 700,
  },
  colors: {
    greens: [
      'hsla(168, 100%, 39%, 1)',
      'hsla(170, 80%, 47%, 1)',
      'hsla(172, 73%, 56%, 1)',
      'hsla(174, 86%, 65%, 1)',
      'hsla(176, 97%, 31%, 1)',
      'hsla(178, 100%, 25%, 1)',
    ],
    blues: [
      'hsla(197, 100%, 65%, 1)',
      'hsla(199, 80%, 56%, 1)',
      'hsla(201, 73%, 47%, 1)',
      'hsla(203, 86%, 39%, 1)',
      'hsla(206, 97%, 31%, 1)',
      'hsla(210, 100%, 25%, 1)',
    ],
    oranges: [
      'hsla(17, 100%, 65%, 1)',
      'hsla(15, 73%, 56%, 1)',
      'hsla(14, 62%, 47%, 1)',
      'hsla(12, 68%, 38%, 1)',
      'hsla(9, 78%, 30%, 1)',
      'hsla(3, 100%, 21%, 1)',
    ],
    blueSaturationScale: [
      'hsla(195, 43%, 95%, 1)',
      'hsla(195, 25%, 91%, 1)',
      'hsla(197, 26%, 66%, 1)',
      'hsla(197, 19%, 57%, 1)',
      'hsla(197, 16%, 39%, 1)',
      'hsla(199, 17%, 21%, 1)',
    ],
    orangeSaturationScale: [
      'hsla(15, 43%, 95%, 1)',
      'hsla(20, 25%, 91%, 1)',
      'hsla(17, 26%, 66%, 1)',
      'hsla(17, 19%, 57%, 1)',
      'hsla(17, 16%, 39%, 1)',
      'hsla(16, 17%, 21%, 1)',
    ],
    blueGrayScale: [
      'hsla(192, 24%, 96%, 1)',
      'hsla(200, 29%, 82%, 1)',
      'hsla(198, 27%, 68%, 1)',
      'hsla(199, 25%, 56%, 1)',
      'hsla(199, 27%, 45%, 1)',
      'hsla(199, 35%, 35%, 1)',
      'hsla(199, 45%, 25%, 1)',
      'hsla(199, 57%, 17%, 1)',
      'hsla(199, 69%, 10%, 1)',
      'hsla(198, 89%, 4%, 1)',
    ],
    orangeGrayScale: [
      'hsla(24, 24%, 96%, 1)',
      'hsla(16, 29%, 82%, 1)',
      'hsla(15, 27%, 68%, 1)',
      'hsla(15, 25%, 56%, 1)',
      'hsla(16, 27%, 45%, 1)',
      'hsla(15, 35%, 35%, 1)',
      'hsla(14, 45%, 25%, 1)',
      'hsla(16, 57%, 17%, 1)',
      'hsla(15, 69%, 10%, 1)',
      'hsla(18, 89%, 4%, 1)',
    ],
    grayScale: [
      'hsla(0, 0%, 95%, 1)',
      'hsla(0, 0%, 85%, 1)',
      'hsla(0, 0%, 75%, 1)',
      'hsla(0, 0%, 65%, 1)',
      'hsla(0, 0%, 55%, 1)',
      'hsla(0, 0%, 45%, 1)',
      'hsla(0, 0%, 35%, 1)',
      'hsla(0, 0%, 25%, 1)',
      'hsla(0, 0%, 15%, 1)',
      'hsla(0, 0%, 5%, 1)',
    ],
  },
  widths: {
    default: 4 / 7,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 156, 188, 220, 256],
  maxWidths: ['32em'],
  radii: [0, 2, 4, 8, 16, 32],
  shadows: [
    'none',
    'inset 0 0 0 1px #eee',
    'inset 0 0 0 1px #eee, 0 0 4px #eee',
    'inset 0 0 0 1px #eee, 0 0 8px #eee',
    'inset 0 0 0 2px #eee, 0 0 8px #eee',
    'inset 0 0 0 4px #eee, 0 0 12px #eee',
    'inset 0 0 0 4px #eee, 0 0 16px #eee',
  ],
};

export default theme;
