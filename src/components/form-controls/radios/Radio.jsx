/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radios.less';

/* eslint-disable no-unused-expressions */
class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      selectedOption: '',
    };
  }

  update = event => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      selectedOption: event.target.value,
    });
  };

  render() {
    const { className, checked, id, label, value, disabled, name } = this.props;
    const classes = cx(
      'ce-radio',
      {
        'ce-radio--checked': checked,
      },
      className,
    );
    return (
      <div className={classes}>
        <label htmlFor={id} className="ce-radio--button">
          <input
            type="radio"
            value={value}
            name={name}
            id={id}
            // eslint-disable-next-line react/destructuring-assignment
            checked={this.selectedOption}
            onClick={this.update}
            disabled={disabled}
          />
          <span className="circle">
            <span />
          </span>
          {label}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  /**
   * Make the radio option inactive.
   */
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Radio.defaultProps = {
  className: '',
  checked: false,
  disabled: false,
};

export default Radio;
