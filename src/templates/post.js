import React from 'react';
import { Row, Column, Container, Heading, Measure, Text } from 'rebass/emotion';
import { withTheme } from 'emotion-theming';

const Post = ({ data, theme }) => {
  const {
    page: { html, timeToRead, frontmatter },
  } = data;
  return (
    <Row>
      <Column>
        <Container w={[3 / 4, theme.widths.default]}>
          <Heading pb={[4]} fontSize={[4, 5]} css={{ fontFamily: theme.fonts.display }}>
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

export default withTheme(Post);

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
