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
      <Row mt={-4} mb={4} py={5} className={bgGradient}>
        <Column />
        <Column my={0} w={[3 / 4, theme.widths.default]}>
          <Container w={3 / 4}>
            <Heading
              color={theme.colors.blueGrayScale[7]}
              mb={0}
              ml={-4}
              fontSize={[4, 6]}
              css={{ fontFamily: theme.fonts.display }}>
              {frontmatter.title}
            </Heading>
          </Container>
        </Column>
        <Column />
      </Row>
      <Row>
        <Column />
        <Column w={[3 / 4, theme.widths.default]}>
          <Container w={3 / 4}>
            <Measure
              maxWidth={['48em']}
              fontSize={[3, '20px']}
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
