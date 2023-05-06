import './Item.css';

const Item = (props) => {
    return (
        <ul className="list">
            <li>{props.children}</li>
        </ul>
    )
}

export default Item;