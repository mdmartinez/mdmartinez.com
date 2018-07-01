import React from 'react';
import {
  Row,
  Column,
  Flex,
  Box,
  Container,
  Heading,
  Subhead,
  Card,
  Border,
  BlockLink,
  Text,
  Measure,
} from 'rebass/emotion';
import { withTheme } from 'emotion-theming';

const Post = ({ data, theme }) => {
  const post = data.markdownRemark;
  return (
    <Row>
      <Column>
        <Container w={[3 / 4, theme.widths.default]}>
          <Heading pb={[4]} fontSize={[4, 5]}>
            {post.frontmatter.title}
          </Heading>
          <Measure
            maxWidth={['48em']}
            fontSize={[3, 4]}
            css={{ color: theme.colors.gray[8] }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Container>
      </Column>
    </Row>
  );
};

export default withTheme(Post);

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