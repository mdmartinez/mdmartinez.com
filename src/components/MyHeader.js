import React from 'react';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Border, Toolbar, NavLink } from 'rebass/emotion';
import styled from 'react-emotion';
import { fontFamily } from 'styled-system';

const NameText = styled(NavLink)(
  {
    lineHeight: 1.2,
    fontWeight: 'normal',
  },
  fontFamily
);

const Link = styled(NavLink)(
  {
    transition: 'border-color 0.1s',
    paddingBottom: 0,
    lineHeight: 1.2,
    borderBottom: '2px solid transparent',
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
        <NameText
          color="white"
          fontFamily="default"
          fontSize={[5, '40px', 6]}
          pl={4}
          onClick={() => navigateTo('/')}
        >
          Daniel Martinez
        </NameText>
        <Link
          onClick={() => navigateTo('/about')}
          ml="auto"
          mr={2}
          fontFamily="default"
          fontWeight="normal"
          fontSize={4}
        >
          about
        </Link>
      </Toolbar>
    </Column>
  </Row>
);

export default MyHeader;
