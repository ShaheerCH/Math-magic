import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    const { bgColor, btnRef, handleClick } = this.props;
    return (
      <button type="button" className={bgColor} onClick={handleClick}>
        {btnRef}
      </button>
    );
  }
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  btnRef: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
