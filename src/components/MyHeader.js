import React from 'react';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Toolbar, NavLink, Text } from 'rebass/emotion';
import styled from 'react-emotion';
import { fontFamily } from 'styled-system';

const Link = styled(NavLink)(
  {
    lineHeight: 1.2,
    fontWeight: 'normal',
  },
  fontFamily
);

const LinkText = styled(Text)(
  {
    paddingTop: 10,
    paddingBottom: 10,
    transition: 'border-color 0.1s',
    borderWidth: '0px',
    borderBottom: '2px solid',
    borderColor: 'transparent',
    textTransform: 'capitalize',
    fontWeight: 'normal',
    '&:hover': {
      borderColor: 'lightYellow',
    },
  },
  fontFamily
);

const MyHeader = () => (
  <Row bg="lightBlue" py={'3em'}>
    <Column mb={0}>
      <Toolbar bg="transparent">
        <Link
          color="white"
          fontFamily="default"
          fontSize={[5, '40px', 6]}
          pl={4}
          onClick={() => navigateTo('/')}
        >
          Daniel Martinez
        </Link>
        <NavLink
          onClick={() => navigateTo('/about')}
          ml="auto"
          mr={2}
          fontFamily="default"
          fontWeight="normal"
          fontSize={4}
        >
          <LinkText>about</LinkText>
        </NavLink>
      </Toolbar>
    </Column>
  </Row>
);

export default MyHeader;
