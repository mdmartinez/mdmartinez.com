import React from 'react';
import { Flex, Container as RContainer, Box, Text } from 'rebass/emotion';
import styled from 'react-emotion';

const Container = styled(RContainer)({
  backgroundColor: 'hsla(44, 100%, 60%, 0.1)',
});

const About = () => (
  <Flex my={5} flexWrap="wrap">
    <Container fontSize={4}>
      <Box>
        <Text py={4} lineHeight={1.2}>
          I'm Daniel, and this is my personal site.
        </Text>
        <Text py={2} lineHeight={1.2}>
          I write about things that matter to me, and that I think others need to know.
        </Text>
        <Text py={4} lineHeight={1.2}>
          Welcome.
        </Text>
      </Box>
    </Container>
  </Flex>
);

export default About;
