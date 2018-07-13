import React from 'react';
import { navigateTo } from 'gatsby-link';
import {
  Row,
  Column,
  Container,
  Heading,
  Measure,
  Divider,
  Flex,
  Box,
  Link,
  Text,
} from 'rebass/emotion';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import EmailCaptureForm from '../components/EmailCaptureForm';
import style, { postTitleBGGradient, animatedUnderline } from '../utils/style';
import theme from '../theme';

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
        <Row mb={4} py={5} mx={0} className={postTitleBGGradient}>
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
        <Row mt={-3} w={1}>
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
        <Row css={{ label: 'bottom-row' }} w={1}>
          <Column />
          <Column {...postColumnStyle} css={{ label: 'bottom-mid-column' }}>
            <Container {...postColumnStyle} css={{ label: 'bottom-container' }}>
              <Divider borderBottom={2} borderColor={style.customColors.blueGrayFade[1]} />
              <EmailCaptureForm />
              <Flex justifyContent="space-between" css={{ label: 'flex' }}>
                <Box>
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
                </Box>
                <Box>
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
                      <Text
                        css={{ color: theme.colors.grayScale[8], opacity: 0.5 }}
                        textAlign="end"
                        mt={4}
                        mb={3}>
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
                </Box>
              </Flex>
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
