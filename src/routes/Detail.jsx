import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { remove } from '../store';

const Detail = () => {
  const id = parseInt(useParams().id);
  const navigate = useNavigate();
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const toDo = toDos.find((todo) => todo.id === parseInt(id));

  const onBtnClick = () => {
    dispatch(remove(id));
    navigate('/');
  };

  return (
    <>
      <h1>{toDo?.text}</h1>
      <p>Created at : {toDo?.id}</p>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
};

export default Detail;
