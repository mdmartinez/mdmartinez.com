import React from 'react';
import { Flex, Container as RContainer, Box, Text } from 'rebass/emotion';
import styled from 'react-emotion';

const Container = styled(RContainer)({
  backgroundColor: 'hsla(44, 100%, 60%, 0.1)',
});

const Blog = () => (
  <Flex ml={5} mt={5} flexWrap="wrap" justifyContent="center">
    <Container w={0.6} fontSize={4}>
      <Box>
        <Text lineHeight={1.2}>
          I'm Daniel, and this is my personal site. I write about things that matter to me, and that
          I think others need to know.
        </Text>
      </Box>
      <Box>
        <Text lineHeight={1.2}>Welcome.</Text>
      </Box>
    </Container>
  </Flex>
);

export default Blog;

export const query = graphql`
  query BlogPostQuery($route: String!) {
    markdownRemark(fields: { route: { eq: $route } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
