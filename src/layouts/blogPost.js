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
import styled from 'react-emotion';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

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
