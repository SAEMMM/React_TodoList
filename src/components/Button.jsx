import React, { useState } from 'react';

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

  export default Button;