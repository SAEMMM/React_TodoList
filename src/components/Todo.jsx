import React, { useState } from 'react';
import '../App.jsx';
import Button from './Button.jsx';

function Todo(props) {
  const delBtnHandler = (id) => {
    const newTodoList = props.todo.filter((todo) => todo.id !== id)
    props.setTodo(newTodoList)
  }
  const doneBtnHandler = (done) => {
    const newDoneTodo = props.todo.map((todo) => {
      if (todo.id === done) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return { ...todo }
      }
    })

    props.setTodo(newDoneTodo)
  }
  return (
    <div className='body-style'>
      <h2>열심히 하는 중.. 🔥</h2>
      {props.todo.map((todo) => {
        if (!todo.done) {
          return (
            <Button
              todo = {todo}
              title = {todo.title}
              content = {todo.content}
              key = {todo.id}
              delBtnHandler = {delBtnHandler}
              doneBtnHandler = {doneBtnHandler} />)
        } else {
          return null
        }
      })}

      <div className='float-none'></div>

      <h2>해내고 말았다!! 🎉</h2>
      {props.todo.map((todo) => {
        if (todo.done) {
          return (
            <Button
              todo = {todo}
              title = {todo.title}
              content = {todo.content}
              key = {todo.id}
              delBtnHandler = {delBtnHandler}
              doneBtnHandler = {doneBtnHandler} />)
        } else {
          return null
        }
      })}
    </div>
  )
}

export default Todo;