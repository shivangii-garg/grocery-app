import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Utils/itemsSlice";

const Right = () => {
  const basketItems = useSelector((state) => state.items.basketItems);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <ul style={{ listStyleType: "none", textAlign: "right" }}>
        {basketItems.map((item) => {
          return (
            <li key={item.key}>
              {item.name}
              <button onClick={() => handleClick(item)}>Remove</button>
            </li>
          );
        })}
      </ul>
      {console.log("basketItems: ", basketItems)}
    </>
  );
};

export default Right;
