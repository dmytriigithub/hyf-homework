import './Item.css';

const Item = (props) => {
    return (
        <li className="list" key={props.id}>{props.children}</li>
    )
}

export default Item;