import React from 'react';
import { Message, Close, Flex, Box, Text } from 'rebass/emotion';
import theme from '../theme';

const Alert = ({
  backgroundColor,
  hoverColor = theme.colors.oranges[5],
  children,
  toggleHandler,
}) => (
  <Message
    w={[8 / 9, theme.widths.default]}
    mb={3}
    bg={backgroundColor}
    fontSize={[1, 2]}
    color={'white'}>
    <Flex w={1} alignItems="center" justifyContent="space-between">
      <Text>{children}</Text>
      <Box>
        <Close
          css={{
            position: 'relative',
            left: '10px',
            bottom: '14px',
            cursor: 'pointer',
            '&:hover': { color: hoverColor },
            '&:focus': { color: 'white' },
          }}
          mb={3}
          onClick={toggleHandler}
        />
      </Box>
    </Flex>
  </Message>
);

export default Alert;
