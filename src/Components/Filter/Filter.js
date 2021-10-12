import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <label>
    <p>
      Find contacts by name
      <input type="text" onChange={onChange} value={value} />
    </p>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
