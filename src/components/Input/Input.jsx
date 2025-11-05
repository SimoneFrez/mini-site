import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={styles.inputField}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;