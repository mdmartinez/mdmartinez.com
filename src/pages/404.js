import React from 'react';
import { Flex, Container, Box, Text } from 'rebass/emotion';

const NotFoundPage = () => (
  <Flex mt={5} flexWrap="wrap" justifyContent="center">
    <Container w={0.6} fontSize={4}>
      <Box>
        <Text py={4} lineHeight={1.2}>
          <h1>Strange</h1>
          <p>There is no content here.</p>
          <p>Perhaps there is an error somewhere?</p>
        </Text>
      </Box>
    </Container>
  </Flex>
);

export default NotFoundPage;
