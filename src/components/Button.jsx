import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  backgroundColor,
  size,
  animate,
  children,
  onClick,
  icon,
  className,
}) => {
  const bg = backgroundColor ? 'bg-' + backgroundColor : 'bg-main';
  const btnSize = size ? 'btn-' + size : '';
  const btnAnimate = animate ? 'btn-animate' : '';

  return (
    <button
      className={`btn ${bg} ${btnSize} ${btnAnimate} ${className}`}
      onClick={onClick}
    >
      <span className="btn__txt">{children}</span>
      {icon ? (
        <span className="btn__icon">
          <i className={icon}></i>
        </span>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;