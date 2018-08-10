import React from 'react';
import { graphql } from 'gatsby';
import { Row, Column, Container, Box, Text } from 'rebass/emotion';
import Layout from '../components/Layout';
import theme from '../theme';
import { chroma } from '../utils/style';

const containerBG = chroma(theme.colors.blueGrayScale[0])
  .alpha(0.8)
  .css('hsl');

const About = ({ data, ...props }) => (
  <Layout location={props.location}>
    <Row mt={4} mx={0}>
      <Column>
        <Container
          w={[7 / 8, theme.widths.default]}
          fontSize={[3, 4]}
          css={{
            maxWidth: '28em',
            backgroundColor: containerBG,
            borderRadius: theme.radii[2],
            boxShadow: theme.shadows[3],
          }}>
          <Box py={3}>
            <Text dangerouslySetInnerHTML={{ __html: data.aboutPage.html }} />
          </Box>
        </Container>
      </Column>
    </Row>
  </Layout>
);

export default About;

export const query = graphql`
  {
    aboutPage: markdownRemark(fileAbsolutePath: { regex: "content/pages/about/" }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
