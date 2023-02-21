import './Checkbox.css';
import check from '../../assets/images/icon-check.svg';
import { useState } from 'react';

const Checkbox = (props) => {
  const toggleChecked = () => {
    props.onClick();
  };

  return (
    <div
      className={`checkbox ${props.completed && 'checked'} 
      ${props.theme === 'light' && 'light'}`}
      onClick={toggleChecked}
    >
      {!props.completed && <div className="checkbox-inner"></div>}
      {props.completed && <img src={check} alt="" />}
    </div>
  );
};
export default Checkbox;
