import React from 'react';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Toolbar, NavLink, Text } from 'rebass/emotion';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const LinkText = styled(Text)(props => ({
  fontFamily: props.theme.fonts.display,
  transition: 'border-color 0.1s',
  borderWidth: '0px',
  borderBottom: '2px solid',
  borderColor: 'transparent',
  textTransform: 'capitalize',
  '&:hover': {
    borderColor: props.theme.colors.oranges[1],
  },
}));

const Header = ({ theme }) => (
  <Row py={'3em'} mb={4} bg="blues.4">
    <Column mb={0}>
      <Toolbar bg="transparent">
        <NavLink
          onClick={() => navigateTo('/')}
          pl={4}
          color="white"
          css={{ fontFamily: theme.fonts.display }}
          fontSize={[5, '40px', 6]}
        >
          Daniel Martinez
        </NavLink>
        <NavLink onClick={() => navigateTo('/about')} ml="auto" mr={2} fontSize={4}>
          <LinkText pt={['17px', '20px']} pb={'5px'}>
            about
          </LinkText>
        </NavLink>
      </Toolbar>
    </Column>
  </Row>
);

export default withTheme(Header);
