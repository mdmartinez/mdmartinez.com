import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Input, Button, Label } from 'rebass/emotion';
import sharedStyles from '../sharedStyles';
import styled from 'react-emotion';

const FormInput = styled(Input)({
  fontSize: '20px',
  transition: 'box-shadow 0.1s, transform 0.1s',
  '&:focus': {
    boxShadow: sharedStyles.shadows.indexPost,
  },
});

export default class NewsletterSignUpForm extends React.Component {
  state = { email: '' };

  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        // console.log(result);
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg,
          });
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: JSON.stringify(err),
        });
      });
  };

  _handleSubmit = async e => {
    e.preventDefault();
    const result = await this._postEmailToMailchimp(this.state.email, {
      pathname: document.location.pathname,
    });
    console.log(result);
    this.setState({ status: `sending`, msg: null });
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
              tabindex="-1"
              value=""
            />
          </div>
          <Button type="submit" value="Subscribe" name="Subscribe" children="Subscribe" />
        </form>
      </div>
    );
  }
}
