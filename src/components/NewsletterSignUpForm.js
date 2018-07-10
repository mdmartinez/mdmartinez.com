import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Input, Button, Label, Text } from 'rebass/emotion';
import styled from 'react-emotion';
import sharedStyles from '../sharedStyles';
import theme from '../theme';

const FormInput = styled(Input)({
  width: '57%',
  marginRight: theme.space[3],
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],
  paddingLeft: theme.space[3],
  boxShadow: sharedStyles.shadows.newsletter,
  transition: 'boxShadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:focus': {
    boxShadow: sharedStyles.shadows.newsletterFocus,
  },
  ':: placeholder': {
    color: sharedStyles.customColors.blueGrayFade[2],
    opacity: 1,
  },
});

export default class NewsletterSignUpForm extends React.Component {
  state = { email: '', honeypot: 'foo' };

  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  _captureHoneyPot = e => {
    this.setState({ honeypot: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    this.setState({ status: `sending`, msg: null });

    // TODO handle resubmission attempt
    // result.msg value:
    // "daniel@mdmartinez.com is already subscribed to list Newsletter Testbed. <a href="https://mdmartinez.us18.list-manage.com/subscribe/send-email?e=ZGFuaWVsQG1kbWFydGluZXouY29t&u=d2ba54848ea37cc4b8252f551&id=5f96d69b04">Click here to update your profile</a>"
    addToMailchimp(this.state.email, {
      PATHNAME: document.location.pathname,
      b_d2ba54848ea37cc4b8252f551_5f96d69b04: this.state.honeypot,
    }).then(result => {
      if (result.result === 'error') {
        this.setState({
          status: result.result,
          msg: result.msg,
        });
      } else if (result.result === 'success') {
        this.setState({
          status: `success`,
          msg: result.msg,
        });
      } else {
        this.setState({
          status: `error`,
          msg: JSON.stringify(result),
        });
      }
    });
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <form
          css={{ display: 'flex', flexWrap: 'wrap' }}
          id="email-capture"
          noValidate
          autoComplete
          onSubmit={this._handleSubmit}>
          <Label py={3} for="email">
            <Text fontSize={['17px', 3]}>
              Enjoyed this post? Receive the next one in your inbox!
            </Text>
          </Label>
          <FormInput
            fontSize={[1, 2]}
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
              value={this.state.honeypot}
              onChange={this._captureHoneyPot}
            />
          </div>
          <Button
            css={{
              boxShadow: sharedStyles.shadows.newsletter,
              transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: theme.colors.blues[1],
                color: 'white',
              },
              '&:focus': {
                backgroundColor: theme.colors.blues[3],
                color: 'white',
              },
            }}
            bg={'transparent'}
            fontSize={[1, 2]}
            color={theme.colors.blueGrayScale[5]}
            py={3}
            type="submit"
            children="Subscribe"
          />
        </form>
      </div>
    );
  }
}
