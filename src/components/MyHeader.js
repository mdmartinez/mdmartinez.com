import React from 'react';
import GLink from 'gatsby-link';
import { Flex, Box, Tabs, Tab as RTab } from 'rebass/emotion';
import styled from 'react-emotion';

const Link = styled(GLink)({
  color: 'white',
  textDecoration: 'none',
});

const Tab = styled(RTab)({
  transition: 'border-color 0.1s',
  '&:hover': {
    borderColor: 'hsla(60, 100%, 80%, 0.8)',
    color: 'white',
  },
  textTransform: 'capitalize',
});

const MyHeader = () => (
  <Flex mb={4}>
    <Box width={1 / 2} px={4} py={5} fontSize={6} bg="hsla(210, 100%, 50%, 0.5)" color="white">
      <Link to="/">Daniel Martinez</Link>
    </Box>
    <Box width={1 / 2} px={4} py={5} bg="hsla(210, 100%, 50%, 0.5)" color="white">
      <Flex mx={-2} justifyContent="end">
        <Tabs borderBottom={0}>
          <Link to="/about">
            <Tab fontSize={3} px={2}>
              about
            </Tab>
          </Link>
        </Tabs>
      </Flex>
    </Box>
  </Flex>
);

export default MyHeader;
