import React from 'react';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Container, Card, Heading } from 'rebass/emotion';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const PostCard = styled(Card)(
  {
    fontSize: '20px',
    textTransform: 'capitalize',
    transition: 'box-shadow 0.1s, transform 0.1s',
    cursor: 'pointer',
  },
  props => ({
    '&:hover': {
      boxShadow: props.theme.cardShadow,
      transform: 'scale(1.01, 1.01)',
    },
  })
);

const IndexPage = ({ data, theme }) => (
  <Row>
    <Column>
      <Container w={[3 / 4, theme.widths.default]}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard
            py={5}
            mb={4}
            boxShadow={3}
            borderRadius={2}
            key={node.id}
            onClick={() => navigateTo(node.fields.route)}
          >
            <Heading textAlign={'center'} fontSize={[3, 4]} fontWeight="600">
              {node.frontmatter.title}
            </Heading>
          </PostCard>
        ))}
      </Container>
    </Column>
  </Row>
);

export default withTheme(IndexPage);

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
