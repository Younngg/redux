import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store';
import ToDo from './ToDo';

const Home = () => {
  const toDos = useSelector((state) => state);

  localStorage.setItem('toDos', JSON.stringify(toDos));

  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add({ text, id: Date.now() }));
    setText('');
  };

  const onDeleteBtnClick = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onBtnClick={onDeleteBtnClick}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Home;
