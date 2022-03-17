import PropTypes from 'prop-types';
import React from 'react';

const Head = (props) => {
  document.title = 'SuperK - ' + props.title;
  return <div>{props.children}</div>;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
