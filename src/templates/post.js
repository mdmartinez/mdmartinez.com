import React from 'react';
import Helmet from 'react-helmet';
import { graphql, push } from 'gatsby';
import { Row, Column, Container, Heading, Measure, Divider, Flex, Box, Link, Text } from 'rebass/emotion';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import EmailCaptureForm from '../components/EmailCaptureForm';
import Layout from '../components/layout';
import style, { postTitleBGGradient, animatedUnderline } from '../utils/style';
import { cx, css } from 'react-emotion';
import theme from '../theme';

const overflowAdjustment = css`
  ${style.mediaQueries.Phablet} {
    && {
      overflow-x: hidden;
    }
  }
`;

const postStyle = css`
  a {
    text-decoration: none;
    color: #262626;
    border-bottom: 3px solid ${theme.colors.oranges[1]};
    &:hover {
      border-bottom: 3px solid ${theme.colors.blues[0]};
    }
  }
  p {
    color: hsla(0, 0%, 0%, 0.8);
    margin-bottom: 2rem;
  }
  blockquote {
    border-left: 3px solid ${theme.colors.blueSaturationScale[3]};
  }
`;

class Post extends React.Component {
  render() {
    const {
        post: { html, frontmatter },
      } = this.props.data,
      post = this.props.data.post;

    const prev =
      this.props.pageContext.prev &&
      this.props.pageContext.prev.fields &&
      this.props.pageContext.prev.fields.slug &&
      this.props.pageContext.prev;
    const next =
      this.props.pageContext.next &&
      this.props.pageContext.next.fields &&
      this.props.pageContext.next.fields.slug &&
      this.props.pageContext.next;
    const postColumnStyle = {
      w: [1, '26em', '32em', '42em'],
      px: ['auto'],
      mx: ['auto'],
    };
    const excerpt = post.frontmatter.excerpt ? post.frontmatter.excerpt : post.excerpt;

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{frontmatter.title}</title>
          <link rel="author" href="https://www.mdmartinez.com" />
          <meta name="description" content={excerpt} />
          <meta name="og:description" content={excerpt} />
          <meta name="twitter:description" content={excerpt} />
          <meta name="og:title" content={frontmatter.title} />
          <meta name="og:type" content="article" />
          <meta name="article:author" content="Daniel Martinez" />
          <meta name="twitter:creator" content="@mdanmartinez" />
          <meta name="author" content="Daniel Martinez" />
          <meta name="twitter:label1" content="Reading time" />
          <meta name="twitter:data1" content={`${post.timeToRead} min read`} />
          <meta name="article:published_time" content={post.frontmatter.rawDate} />
        </Helmet>
        <Row mb={4} py={5} mx={0} className={postTitleBGGradient}>
          <Column px={[2, 4]} css={{ label: 'top-left-column' }} />
          <Column {...postColumnStyle} my={0} css={{ label: 'top-mid-column' }}>
            <Container
              w={[1, '26em', '32em', '52em']}
              px={['auto']}
              mx={['auto']}
              css={{ label: 'top-mid-container' }}>
              <Heading
                color={theme.colors.blueGrayScale[7]}
                mb={0}
                ml={[0, 0, -2, '24px']}
                fontSize={[5, 5, 5, 6]}
                css={{ textTransform: 'capitalize', fontFamily: theme.fonts.display }}>
                {frontmatter.title}
              </Heading>
            </Container>
          </Column>
          <Column px={[2, 4]} />
        </Row>
        <Row mt={-3} mx={0} w={1}>
          <Column px={[2, 3]} />
          <Column {...postColumnStyle} className={overflowAdjustment}>
            <Container {...postColumnStyle}>
              <Measure
                maxWidth={['42em']}
                fontSize={['17px', '17px', '17px', 3]}
                lineHeight={'1.53'}
                className={cx(overflowAdjustment, postStyle)}
                css={{ color: theme.colors.grayScale[8] }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Container>
            <Container {...postColumnStyle} pt={5} css={{ label: 'bottom-container' }}>
              <Divider borderBottom={2} borderColor={style.customColors.blueGrayFade[1]} />
              <EmailCaptureForm />
              <Flex justifyContent="space-between" css={{ label: 'flex-nav-container' }}>
                <Box pr={2}>
                  {prev && (
                    <Link
                      onClick={() => push(prev.fields.slug)}
                      className={animatedUnderline}
                      css={{
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        maxWidth: '5px',
                        width: '100%',
                        color: theme.colors.grayScale[8],
                        opacity: 0.8,
                        cursor: 'pointer',
                      }}>
                      <Text
                        css={{
                          color: theme.colors.grayScale[8],
                          textTransform: 'capitalize',
                          maxWidth: '8px',
                          opacity: 0.5,
                        }}
                        mt={4}
                        mb={3}>
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
                <Box css={{ textAlign: 'end' }}>
                  {next && (
                    <Link
                      onClick={() => push(next.fields.slug)}
                      className={animatedUnderline}
                      css={{
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        maxWidth: '3em',
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
          <Column px={[2, 3]} />
        </Row>
      </Layout>
    );
  }
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        rawDate: date
        excerpt
        canonicalLink
        tags
      }
    }
  }
`;
