import { useContext } from "react";
import {AppContext} from "../../App";

import Item from '../item/Item.jsx'

import './List.css';

const List = () => {
  const { results } = useContext(AppContext);
  console.log(results);

  return (
    <>
      {results.length?  results.map((user) => <Item key={user.id}>{user.login}</Item>) : null}
    </>
  );
}

export default List;