import React from 'react'
import classNames from 'classnames'

import './List.scss'
import Badge from '../../Badge/Badge'

const List = ({ items, isRemovable, onClick }) => {
    return (
        <ul onClick={onClick} className="list">
            {items.map((item, index) => (
                <li key={index} className={classNames(item.className, {'active': item.active})}>
                        {item.icon ? <i className="itemIcon">{item.icon}</i> : <Badge color={item.color} />}
                    <span>
                        {item.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default List
