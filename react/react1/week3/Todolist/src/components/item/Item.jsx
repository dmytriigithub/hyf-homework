import './Item.css';

const Item = (props) => {
    return (
        <div className="todo-list">
            <ul className="list">
            {props.children.length ? props.children : <h1 className='empty-list'>"No items..."</h1>}
            </ul>
        </div>
    )
}

export default Item;