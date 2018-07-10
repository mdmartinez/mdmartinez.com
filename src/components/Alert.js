import React from 'react';
import { Message, Close } from 'rebass/emotion';
import theme from '../theme';

const Alert = ({
  backgroundColor,
  hoverColor = theme.colors.oranges[5],
  closeButtonPosition = '10px',
  children,
  toggleHandler
}) =>  (
  <Message
    w={[8 / 9, theme.widths.default]}
    mb={3}
    bg={backgroundColor}
    fontSize={[1, 2]}
    color={'white'}>
    {children}
    <Close
      css={{
        position: 'relative',
        left: closeButtonPosition,
        bottom: '14px',
        cursor: 'pointer',
        '&:hover': { color: hoverColor },
      }}
      mb={3}
      onClick={toggleHandler}
    />
  </Message>
);

export default Alert;
