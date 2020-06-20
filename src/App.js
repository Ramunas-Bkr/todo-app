import React, { useState } from 'react';
import List from './components/sidebar/List/List';
import Tasks from './components/Tasks/Tasks';
import AddButtonList from './components/sidebar/AddList/AddButtonList';

import DB from './assets/db.json';

function App() {

  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
      return item
    })
  )

  const onAddList = (obj) => {
    const newList = [
      ...lists, obj
    ];
    setLists(newList)
  }

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" className="svg-inline--fa fa-list fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>,
            name: 'All tasks',
            active: false
          }
        ]} />
        <List
          onRemove={(list) => console.log(list)}
          items={lists}
          isRemovable
        />
        <AddButtonList colors={DB.colors} onAddList={onAddList} />
      </div>
      <Tasks />
    </div>

  )
}

export default App;
