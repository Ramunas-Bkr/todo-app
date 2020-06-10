import React from 'react';
import listSVG from './assets/images/list-solid.svg'

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ul className="todo__list">
          <li>
            <i>
              <img src={listSVG} alt="List icon"></img>
            </i> 
            <span>
              All tasks
            </span>
          </li>
        </ul>
      </div>
      <div className="tasks"></div>
    </div>
  )
}

export default App;
