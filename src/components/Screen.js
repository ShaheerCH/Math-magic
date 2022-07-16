import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cName, result } = this.props;
    return <div className={cName}>{result}</div>;
  }
}

Screen.propTypes = {
  cName: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
};

export default Screen;
