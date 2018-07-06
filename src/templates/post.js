import React from 'react';
import { Row, Column, Container, Heading, Measure, Border } from 'rebass/emotion';
import { css } from 'react-emotion';
import chroma from 'chroma-js';
import theme from '../theme';

const blue = theme.colors.blueGrayScale[1];

const gradients = [
  `${blue},`,
  `${chroma(blue)
    .alpha(0.75)
    .css('hsl')} 25%,`,
  `${chroma(blue)
    .alpha(0.35)
    .css('hsl')} 50%,`,
  `${chroma(blue)
    .alpha(0.12)
    .css('hsl')} 75%,`,
  `${chroma(blue)
    .alpha(0.01)
    .css('hsl')} 100%`,
];

const bgGradient = css({
  background: `linear-gradient(to right, ${gradients.join('')})`,
});

const Post = ({ data }) => {
  const {
    page: { html, frontmatter },
  } = data;

  return (
    <div>
      <Row mb={4} py={5} className={bgGradient}>
        <Column />
        <Column w={[49 / 50, theme.widths.default]} px={[0, 'auto']} my={0}>
          <Container w={[49 / 50, 2 / 3]} px={0}>
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
      <Row>
        <Column />
        <Column w={[39 / 40, theme.widths.default]}>
          <Container w={[39 / 40, 2 / 3]} px={[0, 'auto']} mx={[0, 'auto']}>
            <Measure
              maxWidth={[0]}
              fontSize={[2, 3]}
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
