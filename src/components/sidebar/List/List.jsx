import React from 'react'
import classNames from 'classnames'

import removeIcon from '../../../assets/images/remove.svg'
import './List.scss'
import Badge from '../../Badge/Badge'

const List = ({ items, isRemovable, onClick, onRemove }) => {

    const removeList = (item) => {
        if (window.confirm('Are you sure want delete this list?')) {
            onRemove(item)
        }
    }

    return (
        <ul onClick={onClick} className="list">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={classNames(item.className, { 'active': item.active })}>
                    {item.icon ?
                        <i className="itemIcon">{item.icon}</i> : <Badge color={item.color} />}
                    <span>
                        {item.name}
                    </span>
                    {isRemovable &&
                        <img
                            onClick={() => removeList(item)}
                            className="list__removeIcon"
                            src={removeIcon}
                            alt="remove task" />}
                </li>
            ))}
        </ul>
    )
}

export default List
