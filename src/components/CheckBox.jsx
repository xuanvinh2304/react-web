import React, { useRef } from "react";
import PropTypes from "prop-types";

const CheckBox = ({ label, checked, ...props }) => {
  const inputRef = useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  console.log(checked);
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={checked}
      />
      <span className="custom-checkbox__checkmark">
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
