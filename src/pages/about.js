import React from 'react';
import { Row, Column, Container, Box, Text } from 'rebass/emotion';
import { withTheme } from 'emotion-theming';

const About = ({ data, theme }) => (
  <Row>
    <Column>
      <Container
        w={[3 / 4, theme.widths.default]}
        fontSize={4}
        css={{
          backgroundColor: theme.colors.aboutPageYellow,
          borderRadius: theme.radii[2],
          boxShadow: theme.shadows[3],
        }}>
        <Box py={3}>
          <Text dangerouslySetInnerHTML={{ __html: data.aboutPage.html }} />
        </Box>
      </Container>
    </Column>
  </Row>
);

export default withTheme(About);
export const query = graphql`
  query AboutPageQuery {
    aboutPage: markdownRemark(fileAbsolutePath: { regex: "/pages/about/" }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
