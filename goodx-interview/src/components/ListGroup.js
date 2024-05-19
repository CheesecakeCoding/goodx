//import { MouseEvent } from "react";

import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: String;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //items = [];
  //let selectedInterval = -1;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState("");
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  //Event Handler
  /*const handleClick = (event: MouseEvent) => console.log(event);*/

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} /*onClick={handleClick}*/
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

/*{items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}*/
