import React from 'react'
import './List.scss'

const List = ({ items }) => {
    return (
        <ul className="list">
            {items.map(item => (
                <li className={item.active && "active"}>
                        {item.icon ? <i className="itemIcon">{item.icon}</i> : <i className={`badge badge--${item.color}`}></i>}
                    <span>
                        {item.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default List
