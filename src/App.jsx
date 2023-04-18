import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo.jsx';

function App() {
  // 열심히 하는 중 list
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 장인되기1', content: '리액트 장인이 되는 것1', done: false },
    { id: 2, title: '리액트 장인되기2', content: '리액트 장인이 되는 것2', done: true }
  ])

  // input
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // input 내보내주기
  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const contentChangeHandler = (event) => {
    setContent(event.target.value)
  }

  // todo 추가하기
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content
    }

    setTodo([...todo, newTodo])
    setTitle('')
    setContent('')
  }

  return (
    <div className='all-style'>
      <div className='header-title'>샘스 Todo List</div>
      <div className='header-input'>
        제목 <input
          value = {title}
          onChange = {titleChangeHandler} />
        내용 <input
          value={content}
          onChange = {contentChangeHandler} />
        <button className='header-addButton'
          onClick = {clickAddButtonHandler}>추가하기</button>
      </div>

    <Todo todo = {todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
