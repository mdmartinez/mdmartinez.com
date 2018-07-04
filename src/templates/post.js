import React from 'react';
import { Row, Column, Container, Heading, Measure } from 'rebass/emotion';
import styled, { css } from 'emotion';
import theme from '../theme';
import chroma from 'chroma-js';

const orange = theme.colors.orangeSaturationScale[0];
const gradients = chroma
  .scale([orange, '#ffffff'])
  .mode('lch')
  .colors(7);

const fade = css({
  background: `linear-gradient(to right, ${gradients[0]}, ${gradients[1]} 15%, 
    ${gradients[2]} 30%, ${gradients[3]} 45%, ${gradients[4]} 60%, 
    ${gradients[5]} 75%, ${gradients[6]} 90%, transparent 100%)`,
});

const Post = ({ data }) => {
  const {
    page: { html, frontmatter },
  } = data;
  return (
    <Row>
      <Column>
        <Container w={[3 / 4, theme.widths.default]}>
          <Heading
            className={fade}
            pl={1}
            py={[3]}
            mb={4}
            fontSize={[4, 5]}
            css={{ fontFamily: theme.fonts.display }}
          >
            {/* {JSON.stringify(scale)} */}
            {frontmatter.title}
          </Heading>
          <Measure
            maxWidth={['48em']}
            fontSize={[3, 4]}
            css={{ color: theme.colors.grayScale[8] }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Container>
      </Column>
    </Row>
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
