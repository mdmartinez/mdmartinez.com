import React, { Fragment } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Input, Button, Label, Text } from 'rebass/emotion';
import Alert from './Alert';
import styled from 'react-emotion';
import style from '../utils/style';
import theme from '../theme';

const FormInput = styled(Input)({
  width: '57%',
  marginRight: theme.space[3],
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],
  paddingLeft: theme.space[3],
  boxShadow: style.shadows.newsletter,
  transition: `boxShadow ${style.transitions.speedDefault} ${style.transitions.curveDefault}`,
  '&:focus': {
    boxShadow: style.shadows.newsletterFocus,
  },
  ':: placeholder': {
    color: style.customColors.blueGrayFade[2],
    opacity: 1,
  },
});

export default class EmailCaptureForm extends React.Component {
  state = { email: '', status: '', notification: false, honeypot: '', msg: '' };

  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  _captureHoneyPot = e => {
    this.setState({ honeypot: e.target.value });
  };

  _toggleNotification = e => {
    this.setState({
      status: '',
      notification: !this.state.notification,
    });
  };

  _handleSubmit = e => {
    this.setState({ status: 'pending' });
    e.preventDefault();
    e.currentTarget.reset();

    addToMailchimp(this.state.email, {
      PATHNAME: document.location.pathname,
      b_d2ba54848ea37cc4b8252f551_5f96d69b04: this.state.honeypot,
    })
      .then(result => {
        if (result.result === 'error') {
          console.log(result);
          this.setState({
            status: 'error',
            msg: result.msg,
            email: '',
          });
        } else if (result.result === 'success') {
          this.setState({
            status: `success`,
            msg: result.msg,
            email: '',
          });
        }
      })
      .catch(error => {
        this.setState({
          status: `error`,
          msg: JSON.stringify(error),
        });
      });
  };

  render() {
    const { email, status, notification, msg } = this.state;
    // TODO add update profile option to alert
    // const re = RegExp('https[^>]*', 'gi');
    // const updateLink = msg.match(re) && msg.match(re).join('');
    // const fixedLink = updateLink && updateLink.slice(0, updateLink.length - 1);
    // const updateHTML = fixedLink && `you can update your profile <a href=${fixedLink}>here</a>`;
    const blankEmail = email === '' && !msg && notification;
    const alreadySubscribed = status === 'error' && notification && msg.includes('already');
    const error = status === 'error' && notification && !msg.includes('already');
    const success = status === 'success' && notification;
    return (
      <Fragment>
        <form
          css={{ display: 'flex', flexWrap: 'wrap' }}
          id="email-capture"
          noValidate
          autoComplete
          onSubmit={this._handleSubmit}>
          <Label py={3} for="email">
            <Text fontSize={['17px', 3]}>Enjoyed this post? Receive the next one in your inbox!</Text>
          </Label>
          {blankEmail && (
            <Alert
              backgroundColor={theme.colors.greens[0]}
              hoverColor={theme.colors.oranges[0]}
              children="Please enter an email."
              toggleHandler={this._toggleNotification}
            />
          )}
          {alreadySubscribed && (
            <Alert
              backgroundColor={theme.colors.oranges[1]}
              children="You are already subscribed to the newsletter!"
              msg={msg}
              toggleHandler={this._toggleNotification}
            />
          )}
          {error && (
            <Alert
              backgroundColor={theme.colors.oranges[1]}
              children="Something went wrong. Please try again."
              toggleHandler={this._toggleNotification}
            />
          )}
          {success && (
            <Alert
              backgroundColor={theme.colors.greens[0]}
              hoverColor={theme.colors.oranges[0]}
              children="Thank you for subscribing! Youʼll receive your first email shortly."
              toggleHandler={this._toggleNotification}
            />
          )}
          <FormInput
            fontSize={[1, 2]}
            onChange={this._handleEmailChange}
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
          <Button
            onClick={this._toggleNotification}
            css={{
              boxShadow: style.shadows.newsletter,
              transition: `all ${style.transitions.speedFast} ${style.transitions.curveDefault}`,
              '&:hover': { backgroundColor: theme.colors.blues[1], color: 'white' },
              '&:focus': { backgroundColor: theme.colors.blues[3], color: 'white' },
            }}
            bg={'transparent'}
            fontSize={[1, 2]}
            color={theme.colors.blueGrayScale[5]}
            py={3}
            type="submit"
            children="Subscribe"
          />
        </form>
      </Fragment>
    );
  }
}
