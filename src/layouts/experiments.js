import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MyHeader from '../components/MyHeader';
import styled, { css } from 'react-emotion';
import '../css/index.css';

const ExperimentsLayout = ({ children, data }) => <div>{children()}</div>;

ExperimentsLayout.propTypes = {
  children: PropTypes.func,
};

export default ExperimentsLayout;
