import React from 'react';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => onBtnClick(id)}>DEL</button>
    </li>
  );
};

export default ToDo;
