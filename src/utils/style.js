import theme from '../theme';
import chroma from 'chroma-js';
import { css } from 'react-emotion';

const style = {
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

export const animatedUnderline = css`
  &::after {
    content: '';
    display: block;
    width: 100%;
    margin-top: 3px;
    height: 3px;
    transition: transform ${style.transitions.speedDefault} ${style.transitions.curveDefault};
    transform: scaleX(0);
    background-color: ${theme.colors.oranges[1]};
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export const underline = css`
  &::after {
    content: '';
    display: block;
    width: 100%;
    margin-top: 3px;
    height: 3px;
    transition: transform ${style.transitions.speedDefault} ${style.transitions.curveDefault};
    transform: scaleX(1);
    background-color: ${theme.colors.oranges[1]};
  }
`;

const postGradientStops = [
  `${style.customColors.blueGrayFade[0]},`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.75)
    .css('hsl')} 25%,`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.4)
    .css('hsl')} 50%,`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.2)
    .css('hsl')} 75%,`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.01)
    .css('hsl')} 100%`,
];

const headerGradientStops = [
  `${style.customColors.blueGrayFade[0]},`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.85)
    .css('hsl')} 25%,`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.6)
    .css('hsl')} 50%,`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.4)
    .css('hsl')} 65%,`,
  `${chroma(style.customColors.blueGrayFade[0])
    .alpha(0.03)
    .css('hsl')} 100%`,
];

export const postTitleBGGradient = css({
  background: `linear-gradient(to bottom, ${postGradientStops.join('')})`,
});

export const standardHeaderBGGradient = css({
  background: `linear-gradient(to bottom, ${headerGradientStops.join('')})`,
});

export default style;
