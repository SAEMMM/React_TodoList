import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className='all-style'>
      <div className='header-title'>샘스 Todo List</div>
      <div className='header-input'>
        제목 <input />
        내용 <input />
        <button className='header-addButton'>추가하기</button>
      </div>

      <div className='body-style'>
        <h2>열심히 하는 중.. 🔥</h2>
        <div className='body-cards'>
          <div>
            <h3>리액트 장인되기</h3>
            <p>R반의 리액트 장인이 되는 것</p>
            <button>삭제하기</button>
            <button>내가해냄</button>
          </div>
        </div>

        <h2>해내고 말았다!! 🎉</h2>
        <div className='body-cards'>
        <div>
            <h3>리액트 장인되기</h3>
            <p>R반의 리액트 장인이 되는 것</p>
            <button>삭제하기</button>
            <button>내가해냄</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
