import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Toolbar, NavLink, Text } from 'rebass/emotion';
import styled from 'react-emotion';
import theme from '../theme';
import style, { standardHeaderBGGradient, animatedUnderline, underline } from '../utils/style';

const LinkText = styled(Text)(
  props => ({
    fontFamily: theme.fonts.display,
    color: theme.colors.blueGrayScale[9],
    opacity: 0.7,
    transition: 'border-color 0.1s',
    borderWidth: '0px',
    textTransform: 'capitalize',
    '&:hover': animatedUnderline,
  }),
  animatedUnderline,
  props => props.isActive && underline
);

const headerStyles = {
  default: {
    py: ['3em'],
    bg: '',
    className: standardHeaderBGGradient,
    css: { borderBottom: '' },
  },
  post: {
    py: [0],
    bg: style.customColors.blueGrayFade[0],
    className: '',
    css: { borderBottom: `1px solid ${style.customColors.blueGrayFade[1]}` },
  },
};

const Header = ({ location }) => {
  const isAboutPage = location.pathname.match(/^\/about/);
  const isPost = location.pathname.match(/^\/posts\//);
  const pageStyle = isPost ? { ...headerStyles.post } : { ...headerStyles.default };
  return (
    <Row {...pageStyle}>
      <Column mb={0}>
        <Toolbar bg="transparent">
          <NavLink
            onClick={() => navigateTo('/')}
            pl={isPost ? [3, 4] : [4]}
            color={theme.colors.blueGrayScale[8]}
            css={{ fontFamily: theme.fonts.display }}
            fontSize={isPost ? [4, '40px', 6] : [5, '40px', 6]}>
            Daniel Martinez
          </NavLink>
          <NavLink
            onClick={() => navigateTo('/about')}
            ml="auto"
            mr={2}
            fontSize={isPost ? [2, 4] : [3, 4]}>
            <LinkText
              isActive={isAboutPage}
              // className={'active'}
              pt={isPost ? ['8px', '10px'] : ['12px', '20px']}
              pb={['5px']}
              px={1}>
              about
            </LinkText>
          </NavLink>
        </Toolbar>
      </Column>
    </Row>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
