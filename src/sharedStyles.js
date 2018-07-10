import theme from './theme';
import chroma from 'chroma-js';
import { css } from 'react-emotion';

const sharedStyles = {
  shadows: {
    indexPost: `inset 0 0 0 1px ${theme.colors.blueGrayScale[1]}, 0 0 4px ${
      theme.colors.blueGrayScale[1]
    }`,
    low: `inset 0 0 0 1px ${theme.colors.blueGrayScale[1]}, 0 2px 4px ${
      theme.colors.blueGrayScale[1]
    }`,
    high: `inset 0 0 0 1px ${theme.colors.blueGrayScale[1]}, 0 4px 15px ${
      theme.colors.blueGrayScale[1]
    }`,
    newsletter: `inset 0 0 0 1px ${chroma(theme.colors.blueGrayScale[5])
      .alpha(0.4)
      .css('hsl')}`,
    newsletterFocus: `inset 0 0 0 2px ${theme.colors.blues[0]}, 0 0 8px ${theme.colors.blues[0]}`,
    success: `inset 0 0 0 2px ${theme.colors.greens[0]}, 0 0 8px ${theme.colors.greens[0]}`,
    error: `inset 0 0 0 2px ${theme.colors.blues[0]}, 0 0 8px ${theme.colors.blues[0]}`,
  },
  transitions: {
    curveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
    speedDefault: `250ms`,
    speedFast: `100ms`,
    speedSlow: `350ms`,
  },
  mediaQueries: {
    mobile: `(min-width: 400px)`,
    Mobile: `@media (min-width: 400px)`,
    phablet: `(min-width: 550px)`,
    Phablet: `@media (min-width: 550px)`,
    tablet: `(min-width: 750px)`,
    Tablet: `@media (min-width: 750px)`,
    desktop: `(min-width: 1000px)`,
    Desktop: `@media (min-width: 1000px)`,
    hd: `(min-width: 1200px)`,
    Hd: `@media (min-width: 1200px)`,
    VHd: `@media (min-width: 1450px)`,
    VVHd: `@media (min-width: 1650px)`,
  },
  customColors: {
    blueGrayFade: [
      chroma(theme.colors.blueGrayScale[1])
        .alpha(0.75)
        .css('hsl'),
      chroma(theme.colors.blueGrayScale[2])
        .alpha(0.4)
        .css('hsl'),
      chroma(theme.colors.blueGrayScale[5])
        .alpha(0.8)
        .css('hsl'),
      chroma(theme.colors.blueGrayScale[5])
        .alpha(0.4)
        .css('hsl'),
    ],
  },
};

const postGradientList = [
  `${sharedStyles.customColors.blueGrayFade[0]},`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.75)
    .css('hsl')} 25%,`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.4)
    .css('hsl')} 50%,`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.2)
    .css('hsl')} 75%,`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.01)
    .css('hsl')} 100%`,
];

const headerGradientList = [
  `${sharedStyles.customColors.blueGrayFade[0]},`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.85)
    .css('hsl')} 25%,`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.6)
    .css('hsl')} 50%,`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.4)
    .css('hsl')} 65%,`,
  `${chroma(sharedStyles.customColors.blueGrayFade[0])
    .alpha(0.03)
    .css('hsl')} 100%`,
];
export const postTitleBGGradient = css({
  background: `linear-gradient(to bottom, ${postGradientList.join('')})`,
});

export const standardHeaderBGGradient = css({
  background: `linear-gradient(to bottom, ${headerGradientList.join('')})`,
});

export default sharedStyles;
