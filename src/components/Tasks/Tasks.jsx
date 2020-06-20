import React from 'react'

import Pencil from '../../assets/images/pencil-alt-solid.svg'
import Check from '../../assets/images/check-solid.svg'
import './Tasks.scss'

const Tasks = (props) => {
    return (
        <div className="todo__tasks">
            <div className="tasks">
                <h2 className="tasks__title">
                    Frontend
                    <img src={Pencil} alt="pencil" />
                </h2>
                <div className="tasks__items">
                    <div className="checkbox">
                        <input id="check" type="checkbox" />
                        <label htmlFor="check">
                            <img src={Check} alt="check" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks
