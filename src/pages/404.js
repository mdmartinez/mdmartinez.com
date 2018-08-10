import React from 'react';
import { graphql } from 'gatsby';
import { Flex, Container, Box, Text } from 'rebass/emotion';
import Layout from '../components/Layout';

const NotFoundPage = ({ data, ...props }) => (
  <Layout location={props.location}>
    <Flex mt={5} flexWrap="wrap" justifyContent="center">
      <Container w={0.6} fontSize={4}>
        <Box>
          <Text lineHeight={1.2} dangerouslySetInnerHTML={{ __html: data.notFoundPage.html }} />
        </Box>
      </Container>
    </Flex>
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  {
    notFoundPage: markdownRemark(fileAbsolutePath: { regex: "/404/" }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
