# JS Redux / React Redux / React toolkit

## 📌Redux 작동 원리

![redux](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-explained-1300w.png)
http://facebook.github.io/flux/docs/in-depth-overview/

1. 상태 변경을 요청해야 할 경우, dispatch()를 호출한다.
2. dispatch는 action 함수를 reducer에 전달한다.
3. reducer는 이 action에 따라 state를 변화시켜주고, 새로운 state를 store에 넣어준다.
4. store를 컴포넌트들에게 이 사실을 알려주고, UI가 업데이트 된다.

<br>
<br>
<br>

---

<br>

## 📌Redux 사용하기

```js
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
```

### createStore

- createStore는 reducer를 인자로 받아 store를 리턴하는 함수
- store는 subscribe(), dispatch(), getState()를 메서드로 가지는 객체

### reducer

- 현재 state와 무슨 일이 일어났는지("what happened")를 설명하고 새로운 state를 반환하는 객체
- (state, action) => newState
- state 자체를 변경하면 안 된다. 새로운 객체를 만들어 반환해야 한다.

```js
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.id = toDo.id;
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteToDo);
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);
```

### subscribe

- 상태 변경이 되면 subscribe를 통해 UI를 업데이트 할 수 있다.

```js
const addToDo = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

// dispatch 함수
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};
```

### dispatch

- dispatch에 action을 담아 reducer로 보내면 내부 상태를 변경할 수 있다.

<br>
<br>
<br>

Vanilla JS에 Redux를 적용한 소스코드 => https://github.com/Younngg/redux/blob/b10cee165849881fd9dc23619bc206b995513f6a/src/index.js
