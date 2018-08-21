import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/layout';
import { Row, Column, Container, Card, Heading } from 'rebass/emotion';
import styled from 'react-emotion';
import theme from '../theme';
import style from '../utils/style';

const PostCard = styled(Card)({
  fontSize: '20px',
  textTransform: 'capitalize',
  transition: 'all 0.1s',
  cursor: 'pointer',
  '&:hover': {
    transform: `translateY(-2px) scale(1.01, 1.01)`,
    boxShadow: style.shadows.high,
  },
  '&:active': {
    boxShadow: style.shadows.low,
    transform: `translateY(0) scale(1.0, 1.0)`,
    transition: `transform 50ms`,
  },
});

const IndexPage = ({ data, ...props }) => (
  <Layout location={props.location}>
    <Row mt={4} mx={0}>
      <Column>
        <Container w={[13 / 14, theme.widths.default]}>
          {data.blogPosts.edges.map(({ blogPost }) => (
            <PostCard
              py={5}
              mb={4}
              boxShadow={3}
              borderRadius={2}
              key={blogPost.id}
              onClick={() => navigate(blogPost.fields.slug)}>
              <Heading
                textAlign={'center'}
                fontSize={[3, 4]}
                color={theme.colors.blueGrayScale[7]}
                css={{ fontFamily: theme.fonts.display }}>
                {blogPost.frontmatter.title}
              </Heading>
            </PostCard>
          ))}
        </Container>
      </Column>
    </Row>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  {
    blogPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//content/posts//" } }
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
