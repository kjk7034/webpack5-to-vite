import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import './inputbox.scss';

function Inputbox({ placeholder }) {
  return (
    <div className="textinput-container">
      <input placeholder={placeholder} type="text" />
      <div className="input-error">
        <FontAwesomeIcon icon={faExclamation} />
        Error message
      </div>
    </div>
  );
}

export default Inputbox;
