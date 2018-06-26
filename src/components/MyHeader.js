import React from 'react';
import GLink, { navigateTo } from 'gatsby-link';
import { Flex, Box, Tabs, Tab as RTab, Text, NavLink } from 'rebass/emotion';
import styled from 'react-emotion';

const NameText = styled(Text)({
  cursor: 'pointer',
  lineHeight: '1.1',
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
  <Flex mb={4} alignContent="center">
    <Box
      width={[3 / 4, 1 / 2, 1 / 2]}
      px={4}
      py={[5, 5]}
      fontSize={[5, 6]}
      bg="hsla(210, 100%, 50%, 0.5)"
      color="white"
    >
      <NameText onClick={() => navigateTo('/')}>Daniel Martinez</NameText>
    </Box>
    <Box
      width={[1 / 4, 1 / 2, 1 / 2]}
      px={[0, 4]}
      py={5}
      bg="hsla(210, 100%, 50%, 0.5)"
      color="white"
    >
      <Flex mx={-2} justifyContent="flex-end">
        <Tabs borderBottom={0}>
          <Tab onClick={() => navigateTo('/about')} fontWeight="normal" fontSize={3} px={2}>
            about
          </Tab>
        </Tabs>
      </Flex>
    </Box>
  </Flex>
);

export default MyHeader;
