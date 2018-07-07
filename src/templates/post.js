import React from 'react';
import { Row, Column, Container, Heading, Measure } from 'rebass/emotion';
import theme from '../theme';
import sharedStyles, { postTitleBGGradient } from '../sharedStyles';

const Post = ({ data, pathContext }) => {
  const {
    page: { html, frontmatter },
  } = data;

  return (
    <div>
      <Row mb={4} py={5} className={postTitleBGGradient}>
        <Column />
        <Column w={[49 / 50, theme.widths.default]} px={[0, 'auto']} my={0}>
          <Container w={[49 / 50, 2 / 3]} px={0} px={[0, 'auto']} mx={[0, 'auto']}>
            <Heading
              color={theme.colors.blueGrayScale[7]}
              mb={0}
              ml={[0, -2]}
              fontSize={[5, 6]}
              css={{ fontFamily: theme.fonts.display }}>
              {frontmatter.title}
            </Heading>
          </Container>
        </Column>
        <Column />
      </Row>
      <Row mt={-3}>
        <Column />
        <Column w={[39 / 40, theme.widths.default]} px={[0, 'auto']} mx={[0, 'auto']}>
          <Container w={[39 / 40, 2 / 3]} px={[0, 'auto']} mx={[0, 'auto']}>
            <Measure
              maxWidth={['30em']}
              fontSize={['17px', 3]}
              lineHeight={1}
              css={{ color: theme.colors.grayScale[8] }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Container>
        </Column>
        <Column />
      </Row>
    </div>
  );
};

export default Post;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
