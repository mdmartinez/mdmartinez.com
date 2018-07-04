import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import { Row, Column, Container, Card, Heading } from 'rebass/emotion';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const PostCard = styled(Card)(props => ({
  fontSize: '20px',
  textTransform: 'capitalize',
  transition: 'box-shadow 0.1s, transform 0.1s',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: props.theme.cardShadow,
    transform: 'scale(1.01, 1.01)',
  },
}));

const IndexPage = ({ data, theme }) => (
  <Row>
    <Column>
      <Container w={[3 / 4, theme.widths.default]}>
        {data.blogPages.edges.map(({ blogPost }) => (
          <PostCard
            py={5}
            mb={4}
            boxShadow={3}
            borderRadius={2}
            key={blogPost.id}
            onClick={() => navigateTo(blogPost.fields.slug)}
          >
            <Heading
              textAlign={'center'}
              fontSize={[3, 4]}
              css={{ fontFamily: theme.fonts.display }}
            >
              {blogPost.frontmatter.title}
            </Heading>
          </PostCard>
        ))}
      </Container>
    </Column>
  </Row>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withTheme(IndexPage);

export const query = graphql`
  query AllBlogPostsQuery {
    blogPages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        blogPost: node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
