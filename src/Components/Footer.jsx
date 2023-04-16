import { useSelector } from "react-redux";
const Footer = () => {
  const basketItems = useSelector((state) => state.items.basketItems);
  return (
    <>
      <p>
        Total:{" "}
        {basketItems.reduce((acc, item) => {
          return (acc = acc + item.price);
        }, 0)}{" "}
        <br />
        Count: {basketItems.length}
      </p>
    </>
  );
};

export default Footer;
