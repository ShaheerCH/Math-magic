import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bgColor, btnRef } = this.props;
    return (
      <button type="button" className={bgColor}>
        {btnRef}
      </button>
    );
  }
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  btnRef: PropTypes.string.isRequired,
};

export default Button;
