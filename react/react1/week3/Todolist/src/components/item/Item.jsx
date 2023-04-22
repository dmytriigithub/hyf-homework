import React from "react";
import './Item.css';

const Item = (props) => {
    return (
        <div className="todo-list">
            <h1 className={!props.children.length ? 'empty-list': 'empty-list hide'}>"No items..."</h1>
            <ul className="list">
                {React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className:"list-item"})
                })}
            </ul>
        </div>
    )
}

export default Item;