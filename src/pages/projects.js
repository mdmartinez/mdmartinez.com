import React from 'react';
import { Row, Column, Container, Flex, Text } from 'rebass/emotion';
import Layout from '../components/layout';
import ScopanaLogo from '../components/ScopanaLogo';
import { css } from 'react-emotion';
import theme from '../theme';

const textStyle = css`
  a {
    text-decoration: none;
    color: #262626;
    border-bottom: 3px solid ${theme.colors.oranges[1]};
    &:hover {
      border-bottom: 3px solid ${theme.colors.blues[0]};
    }
  }
  p {
    margin-bottom: 2rem;
  }
  blockquote {
    border-left: 3px solid ${theme.colors.blueSaturationScale[3]};
  }
`;

const Projects = ({ data, ...props }) => (
  <React.Fragment>
    <Layout location={props.location}>
      <Row mt={4} mx={0} css={{ height: '100vh' }}>
        <Column>
          <Container w={[7 / 8, theme.widths.default]} fontSize={[3, 3]}>
            <Flex flexDirection={'column'}>
              <ScopanaLogo />
              <Text ml={'12px'} mt={4} className={textStyle}>
                I'm currently working on building a simpler way to explore data. Scopana is a tool for
                computing over information. Whether that information comes from an API, an event stream, or a
                static CSV on sitting on your desktop is completely up to you.
              </Text>
            </Flex>
          </Container>
        </Column>
      </Row>
    </Layout>
  </React.Fragment>
);

export default Projects;

// export const query = graphql`
//   {
//     aboutPage: markdownRemark(fileAbsolutePath: { regex: "content/pages/projects/" }) {
//       html
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `;
