import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Toolbar, NavLink, Text } from 'rebass/emotion';
import styled from 'react-emotion';
import theme from '../theme';
import chroma from 'chroma-js';

const bgBase = theme.colors.blueGrayScale[1];
const headerBG = chroma(bgBase)
  .alpha(0.75)
  .css('hsl');
const headerBorderColor = chroma(theme.colors.blueGrayScale[2])
  .alpha(0.4)
  .css('hsl');

const LinkText = styled(Text)(props => ({
  fontFamily: theme.fonts.display,
  color: theme.colors.blueGrayScale[9],
  opacity: 0.7,
  transition: 'border-color 0.1s',
  borderWidth: '0px',
  textTransform: 'capitalize',
  borderBottom: props.isActive ? `2px solid ${theme.colors.oranges[1]}` : '2px solid transparent',
  '&:hover': {
    borderColor: theme.colors.oranges[1],
  },
}));

const PostHeader = ({ headerVisible = true, location }) => {
  const isAbout = location.pathname.match(/^\/about/);

  return (
    <Row
      bg={headerBG}
      css={{
        borderBottom: `1px solid ${headerBorderColor}`,
        display: headerVisible ? 'flex' : 'none',
      }}>
      <Column mb={0}>
        <Toolbar bg="transparent">
          <NavLink
            onClick={() => navigateTo('/')}
            pl={[3, 4]}
            color={theme.colors.blueGrayScale[8]}
            css={{ fontFamily: theme.fonts.display }}
            fontSize={[4, '40px', 6]}>
            Daniel Martinez
          </NavLink>
          <NavLink onClick={() => navigateTo('/about')} ml="auto" mr={2} fontSize={[2, 4]}>
            <LinkText isActive={isAbout} pt={['8px', '10px']} pb={['5px']} px={1}>
              about
            </LinkText>
          </NavLink>
        </Toolbar>
      </Column>
    </Row>
  );
};

export default PostHeader;
