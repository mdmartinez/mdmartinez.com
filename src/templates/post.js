import React from 'react';
import { Row, Column, Container, Heading, Measure, Divider } from 'rebass/emotion';
import theme from '../theme';
import sharedStyles, { postTitleBGGradient } from '../sharedStyles';
import EmailCaptureForm from '../components/EmailCaptureForm';

const Post = ({ data, pathContext }) => {
  const {
    page: { html, frontmatter },
  } = data;

  const postColumnStyle = {
    w: [1, theme.widths.default],
    px: [0, 'auto'],
    mx: [0, 'auto'],
  };

  let canonicalLink;
  if (frontmatter.canonicalLink) {
    canonicalLink = <link rel="canonical" href={frontmatter.canonicalLink} />;
  }

  return (
    <div>
      <Row mb={4} py={5} className={postTitleBGGradient}>
        <Column />
        <Column {...postColumnStyle} my={0}>
          <Container {...postColumnStyle}>
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
        <Column {...postColumnStyle}>
          <Container {...postColumnStyle}>
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
      <Row>
        <Column />
        <Column {...postColumnStyle}>
          <Container {...postColumnStyle}>
            <Divider borderBottom={2} borderColor={sharedStyles.customColors.blueGrayFade[1]} />
            <EmailCaptureForm />
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
