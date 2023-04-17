import React, { useState } from 'react';
import './App.css';

function Todo({ todo, setTodo }) {
  const delBtnHandler = (id) => {
    const newTodoList = todo.filter((todo) => todo.id !== id)
    setTodo(newTodoList)
  }
  const doneBtnHandler = (done) => {
    const newDoneTodo = todo.map((todo) => {
      if (todo.id === done) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return { ...todo }
      }
    })

    setTodo(newDoneTodo)
  }
  return (
    <div className='body-style'>
      <h2>열심히 하는 중.. 🔥</h2>
      {todo.map((todo) => {
        if (!todo.done) {
          return (
            <Button
              todo={todo}
              title={todo.title}
              content={todo.content}
              key={todo.id}
              delBtnHandler={delBtnHandler}
              doneBtnHandler={doneBtnHandler} />)
        } else {
          return null
        }
      })}

      <div className='float-none'></div>

      <h2>해내고 말았다!! 🎉</h2>
      {todo.map((todo) => {
        if (todo.done) {
          return (
            <Button
              todo={todo}
              title={todo.title}
              content={todo.content}
              key={todo.id}
              delBtnHandler={delBtnHandler}
              doneBtnHandler={doneBtnHandler} />)
        } else {
          return null
        }
      })}
    </div>
  )
}

function Button({todo, doneBtnHandler, delBtnHandler}) {
  return (
    <div className='body-cards'>
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div className='btns'>
        <button onClick={() => delBtnHandler(todo.id)}
          className='delBtn'>포기하기</button>
        <button onClick={() => doneBtnHandler(todo.id)}
          className='doneBtn'>{todo.done ? '다시하기' : '내가해냄'}</button>
      </div>
    </div>
  </div>
  )
}



function App() {
  // 열심히 하는 중 list
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 장인되기1', content: '리액트 장인이 되는 것1', done: false },
    { id: 2, title: '리액트 장인되기2', content: '리액트 장인이 되는 것2', done: true }
  ])

  // 완료 list
  const [doneTodo, setDoneTodo] = useState([])

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

  // todo에서 포기하기
  const delBtnHandler = (id) => {
    const newTodoList = todo.filter((todo) => todo.id !== id)
    setTodo(newTodoList)
  }
  // done에서 포기하기
  const doneDelBtnHandler = (id) => {
    const newDoneList = doneTodo.filter((done) => done.id !== id)
    setTodo(newDoneList)
  }

  // 내가해냄(todo에서 done으로 이동)
  const doneBtnHandler = (done) => {
    const newDoneTodo = {
      id: done.id,
      title: done.title,
      content: done.content
    }

    setDoneTodo([...doneTodo, newDoneTodo])
    setTodo(todo.filter((v) => v.id !== done.id))
  }

  // 다시하기(done에서 todo로 이동)
  const reDoBtnHandler = () => {

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

    <Todo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
