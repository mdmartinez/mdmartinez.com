import React from 'react';
import logo from '../assets/logo.svg';
import { Image, Link } from 'rebass/emotion';
import { css } from 'react-emotion';
import theme from '../theme';

const linkStyle = css`
  text-decoration: none;
  color: hsla(0, 0%, 0%, 0.75);
  font-size: 2em;
  font-family: 'system-ui';
  border-bottom: 3px solid ${theme.colors.oranges[1]};
  &:hover {
    border-bottom: 3px solid ${theme.colors.blues[0]};
  }
`;

const ScopanaLogo = () => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <Image css={{ minWidth: '58px' }} pr={2} m={0} src={logo} />
      <Link href="https://www.scopana.com" className={linkStyle}>
        Scopana
      </Link>
    </div>
  );
};

export default ScopanaLogo;
