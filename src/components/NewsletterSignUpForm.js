import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Input, Button, Label } from 'rebass/emotion';
import styled from 'react-emotion';
import sharedStyles from '../sharedStyles';
import theme from '../theme';

const FormInput = styled(Input)({
  fontSize: '20px',
  transition: 'box-shadow 0.1s, transform 0.1s',
  '&:focus': {
    boxShadow: sharedStyles.shadows.indexPost,
  },
  ':: placeholder': {
    color: theme.colors.blueGrayScale[4],
    opacity: 1,
  },
});

export default class NewsletterSignUpForm extends React.Component {
  state = { email: '', honeypot: '' };

  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  _captureHoneyPot = e => {
    this.setState({ honeypot: e.target.value });
  };

  _handleSubmit = async e => {
    e.preventDefault();
    this.setState({ status: `sending`, msg: null });
    const result = await addToMailchimp(this.state.email, {
      PATHNAME: document.location.pathname,
      b_d2ba54848ea37cc4b8252f551_5f96d69b04: this.state.honeypot,
    });
    if (result.result === 'error') {
      this.setState({ status: result.result, msg: result.msg });
    } else if (result.result === 'success') {
      this.setState({ status: `success`, msg: result.msg });
    } else {
      this.setState({ status: `error`, msg: JSON.stringify(result) });
    }
    console.log(result);
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <form id="email-capture" noValidate autoComplete onSubmit={this._handleSubmit}>
          <Label for="email">Enjoyed this post? Receive the next one in your inbox!</Label>
          <FormInput
            onChange={this._handleEmailChange}
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="you@email.com"
            required
          />
          <div css={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_d2ba54848ea37cc4b8252f551_5f96d69b04"
              tabIndex="-1"
              onChange={this._captureHoneyPot}
            />
          </div>
          <Button type="submit" value="Subscribe" name="Subscribe" children="Subscribe" />
        </form>
      </div>
    );
  }
}
