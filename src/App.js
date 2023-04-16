import React, { useState } from 'react';
import './App.css';

function Todo(props) {
  return (
    <div className='body-cards'>
      <div>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.content}</p>
        <div className='btns'>
          <button className='delBtn'>포기하기</button>
          <button className='doneBtn'>내가해냄</button>
        </div>
      </div>
    </div>
  )
}
function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 장인되기', content: 'R반의 리액트 장인이 되는 것' },
    { id: 2, title: '리액트 장인되기', content: 'R반의 리액트 장인이 되는 것' },
  ])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const contentChangeHandler = (event) => {
    setContent(event.target.value)
  }

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
          value={title}
          onChange={titleChangeHandler} />
        내용 <input
          value={content}
          onChange={contentChangeHandler} />
        <button className='header-addButton'
          onClick={clickAddButtonHandler}>추가하기</button>
      </div>

      <div className='body-style'>
        <h2>열심히 하는 중.. 🔥</h2>
        {todo.map((todo) => {
          return <Todo todo={todo} key={todo.id} />
        })}
        {/* <div className='body-cards'>
          <div>
            <h3>리액트 장인되기</h3>
            <p>R반의 리액트 장인이 되는 것</p>
            <div className='btns'>
              <button className='delBtn'>포기하기</button>
              <button className='doneBtn'>내가해냄</button>
            </div>
          </div>
        </div> */}
        <div className='float-none'></div>
        <h2>해내고 말았다!! 🎉</h2>
        <div className='body-cards'>
          <div>
            <h3>리액트 장인되기</h3>
            <p>R반의 리액트 장인이 되는 것</p>
            <div className='btns'>
              <button className='delBtn'>포기하기</button>
              <button className='doneBtn'>내가해냄</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
