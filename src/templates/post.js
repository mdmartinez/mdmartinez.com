import React from 'react';
import { Row, Column, Container, Heading, Measure, Divider, Link, Text } from 'rebass/emotion';
import { navigateTo } from 'gatsby-link';
import theme from '../theme';
import sharedStyles, { postTitleBGGradient } from '../sharedStyles';
import { css } from 'emotion';
import EmailCaptureForm from '../components/EmailCaptureForm';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

class Post extends React.Component {
  render() {
    const {
      page: { html, frontmatter },
    } = this.props.data;

    const prev =
      this.props.pathContext.prev &&
      this.props.pathContext.prev.fields &&
      this.props.pathContext.prev.fields.slug &&
      this.props.pathContext.prev;
    const next =
      this.props.pathContext.next &&
      this.props.pathContext.next.fields &&
      this.props.pathContext.next.fields.slug &&
      this.props.pathContext.next;

    const animatedUnderline = css`
      &::after {
        content: '';
        display: block;
        width: 100%;
        margin-top: 3px;
        height: 3px;
        transition: transform 250ms ease;
        transform: scaleX(0);
        background-color: ${theme.colors.blueGrayScale[7]};
      }
      &:hover::after {
        transform: scaleX(1);
      }
    `;

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
              {prev && (
                <Link
                  onClick={() => navigateTo(prev.fields.slug)}
                  className={animatedUnderline}
                  css={{
                    fontWeight: 'bold',
                    display: 'inline-block',
                    color: theme.colors.grayScale[8],
                    opacity: 0.8,
                    cursor: 'pointer',
                  }}>
                  <Text css={{ color: theme.colors.grayScale[8], opacity: 0.5 }} mt={4} mb={3}>
                    Previous
                  </Text>
                  <MdArrowBack
                    size={18}
                    color={theme.colors.grayScale[8]}
                    style={{ verticalAlign: 'sub', opacity: 0.8, marginRight: '6px' }}
                  />
                  {prev.frontmatter.title}
                </Link>
              )}
              {next && (
                <Link
                  onClick={() => navigateTo(next.fields.slug)}
                  className={animatedUnderline}
                  css={{
                    fontWeight: 'bold',
                    display: 'inline-block',
                    color: theme.colors.grayScale[8],
                    opacity: 0.8,
                    cursor: 'pointer',
                  }}>
                  <Text css={{ color: theme.colors.grayScale[8], opacity: 0.5 }} mt={4} mb={3}>
                    Next
                  </Text>
                  {next.frontmatter.title}
                  <MdArrowForward
                    size={18}
                    color={theme.colors.grayScale[8]}
                    style={{ verticalAlign: 'sub', opacity: 0.8, marginLeft: '6px' }}
                  />
                </Link>
              )}
            </Container>
          </Column>
          <Column />
        </Row>
      </div>
    );
  }
}

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
