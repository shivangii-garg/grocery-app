import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Utils/itemsSlice";

const Left = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div style={{ width: "50vw", textAlign: "left" }}>
      <ul style={{ listStyleType: "none" }}>
        {items.map((item) => {
          return (
            <li key={item.key}>
              {item.name}
              <button onClick={() => handleClick(item)}>Add</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Left;
