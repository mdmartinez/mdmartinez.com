import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
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
    mx: [0],
    bg: '',
    className: standardHeaderBGGradient,
    css: { borderBottom: '' },
  },
  post: {
    py: [0],
    mx: [0],
    bg: style.customColors.blueGrayFade[0],
    className: '',
    css: { borderBottom: `1px solid ${style.customColors.blueGrayFade[1]}` },
  },
};

const Header = ({ location }) => {
  const isAboutPage = location.pathname.match(/^\/about/);
  const isProjectsPage = location.pathname.match(/^\/projects/);
  const isPost = location.pathname.match(/^\/posts\//);
  const pageStyle = isPost ? { ...headerStyles.post } : { ...headerStyles.default };
  return (
    <Row {...pageStyle}>
      <Column mb={0}>
        <Toolbar bg="transparent">
          <NavLink
            onClick={() => navigate('/')}
            pl={isPost ? [0, 4] : [4]}
            ml={isPost ? [-2, -3] : [-4, -3]}
            color={theme.colors.blueGrayScale[8]}
            css={{ fontFamily: theme.fonts.display }}
            fontSize={isPost ? [4, '40px', 6] : [5, '40px', 6]}>
            Daniel Martinez
          </NavLink>
          <NavLink
            onClick={() => navigate('/projects')}
            ml="auto"
            mr={isPost ? [-3, 0] : [-3, 0]}
            fontSize={isPost ? [2, 4] : [3, 4]}>
            <LinkText isActive={isProjectsPage} pt={isPost ? ['15px'] : ['15px', '20px']} pb={['5px']} px={1}>
              Projects
            </LinkText>
          </NavLink>
          <NavLink
            onClick={() => navigate('/about')}
            mr={isPost ? [-3, 0] : [-3, 0]}
            fontSize={isPost ? [2, 4] : [3, 4]}>
            <LinkText isActive={isAboutPage} pt={isPost ? ['15px'] : ['15px', '20px']} pb={['5px']} px={1}>
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
