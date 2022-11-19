import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: JSON.parse(localStorage.getItem('toDos')) || [],
  reducers: {
    add: (state, action) => {
      const newToDo = { text: action.payload.text, id: action.payload.id };
      state.unshift(newToDo);
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
