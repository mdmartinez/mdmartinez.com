import React from 'react';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Toolbar, NavLink, Text } from 'rebass/emotion';
import styled from 'react-emotion';

const LinkText = styled(Text)({
  transition: 'border-color 0.1s',
  borderWidth: '0px',
  borderBottom: '2px solid',
  borderColor: 'transparent',
  textTransform: 'capitalize',
  '&:hover': {
    borderColor: 'lightYellow',
  },
});

const MyHeader = () => (
  <Row py={'3em'} mb={4} bg="lightBlue">
    <Column mb={0}>
      <Toolbar bg="transparent">
        <NavLink onClick={() => navigateTo('/')} pl={4} color="white" fontSize={[5, '40px', 6]}>
          Daniel Martinez
        </NavLink>
        <NavLink onClick={() => navigateTo('/about')} ml="auto" mr={2} fontSize={4}>
          <LinkText pt={['7px', '10px']}>about</LinkText>
        </NavLink>
      </Toolbar>
    </Column>
  </Row>
);

export default MyHeader;
