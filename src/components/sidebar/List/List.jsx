import React from 'react'
import classNames from 'classnames'

import remove from '../../../assets/images/remove.svg'
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
                   { isRemovable && <img className="list__removeIcon" src={remove} alt="remove task" /> }
                </li>
            ))}
        </ul>
    )
}

export default List
