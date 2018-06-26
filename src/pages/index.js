import React from 'react';

import { Flex, Container, Box, Text } from 'rebass/emotion';

const IndexPage = () => (
  <Flex mt={5} flexWrap="wrap" justifyContent="center">
    <Container w={0.5} fontSize={4}>
      <Box>
        <Text lineHeight={1.2}>Welcome.</Text>
      </Box>
    </Container>
  </Flex>
);

export default IndexPage;
