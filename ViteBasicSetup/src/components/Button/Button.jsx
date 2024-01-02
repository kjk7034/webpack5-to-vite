import React from 'react';
import './Button.scss';

function Button({ title, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {title}
    </button>
  );
}

export default Button;
