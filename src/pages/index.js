import React from 'react';
import { navigateTo } from 'gatsby-link';
import { Row, Container, Card, Heading } from 'rebass/emotion';
import styled from 'react-emotion';

const PostLink = styled(Card)(
  {
    textTransform: 'capitalize',
    transition: 'box-shadow 0.1s, transform 0.1s',
    cursor: 'pointer',
    fontSize: '20px',
  },
  props => ({
    '&:hover': {
      boxShadow: props.theme.cardShadow || 'inset 0 0 0 4px #eee, 0 0 16px #eee',
      transform: 'scale(1.01, 1.01)',
    },
  })
);

const IndexPage = ({ data }) => (
  <Row>
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostLink
          px={[3, 6, 9]}
          py={5}
          mx={3}
          my={4}
          boxShadow={3}
          borderRadius={2}
          key={node.id}
          onClick={() => navigateTo(node.fields.route)}
        >
          <Heading fontSize={[3, 4]} fontWeight="normal">
            {node.frontmatter.title}
          </Heading>
        </PostLink>
      ))}
    </Container>
  </Row>
);

export default IndexPage;

export const query = graphql`
  query MarkdownQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            route
          }
          timeToRead
          tableOfContents
          wordCount {
            paragraphs
            sentences
            words
          }
          excerpt
        }
      }
      totalCount
    }
  }
`;
