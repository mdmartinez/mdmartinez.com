import React from 'react';
import { Flex, Container, Box, Text } from 'rebass/emotion';

const NotFoundPage = ({ data }) => (
  <Flex mt={5} flexWrap="wrap" justifyContent="center">
    <Container w={0.6} fontSize={4}>
      <Box>
        <Text lineHeight={1.2} dangerouslySetInnerHTML={{ __html: data.notFoundPage.html }} />
      </Box>
    </Container>
  </Flex>
);

export default NotFoundPage;

export const query = graphql`
  query NotFoundQuery {
    notFoundPage: markdownRemark(fileAbsolutePath: { regex: "/404/" }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
