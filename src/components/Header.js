import React from 'react';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Toolbar, NavLink, Text } from 'rebass/emotion';
import styled from 'react-emotion';
import theme from '../theme';

const LinkText = styled(Text)({
  fontFamily: theme.fonts.display,
  color: theme.colors.blueGrayScale[0],
  transition: 'border-color 0.1s',
  borderWidth: '0px',
  borderBottom: '2px solid',
  borderColor: 'transparent',
  textTransform: 'capitalize',
  '&:hover': {
    borderColor: theme.colors.oranges[1],
  },
});

const Header = () => (
  <Row py="3em" mb={4} bg="blues.4">
    <Column mb={0}>
      <Toolbar bg="transparent">
        <NavLink
          onClick={() => navigateTo('/')}
          pl={4}
          color={theme.colors.blueGrayScale[0]}
          css={{ fontFamily: theme.fonts.display }}
          fontSize={[5, '40px', 6]}>
          Daniel Martinez
        </NavLink>
        <NavLink onClick={() => navigateTo('/about')} ml="auto" mr={2} fontSize={[3, 4]}>
          <LinkText pt={['12px', '20px']} pb={['5px']}>
            about
          </LinkText>
        </NavLink>
      </Toolbar>
    </Column>
  </Row>
);

export default Header;
