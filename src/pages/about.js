import React from 'react';
import { Row, Column, Container, Box, Text } from 'rebass/emotion';
import { withTheme } from 'emotion-theming';

const About = ({ theme }) => (
  <Row>
    <Column>
      <Container
        w={[3 / 4, theme.widths.default]}
        fontSize={4}
        css={{
          backgroundColor: theme.colors.aboutPageYellow,
          borderRadius: theme.radii[2],
          boxShadow: theme.shadows[3],
        }}
      >
        <Box>
          <Text py={4}>I'm Daniel, and this is my personal site.</Text>
          <Text py={2}>
            I write about things that matter to me, and that I think others need to know.
          </Text>
          <Text py={4}>Welcome.</Text>
        </Box>
      </Container>
    </Column>
  </Row>
);

export default withTheme(About);
