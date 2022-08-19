import { useState, useContext, useEffect } from "react";
import PerfumeContext from "../context/ProductContext";
import "./Item.css";

const Item = (props) => {
  const { onAdd } = props;
  const perfumes = useContext(PerfumeContext);
  const [showItem, setShowItem] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    const perObj = perfumes.find((item) => item.id === props.item);
    setShowItem(perObj);
    // setIsCartEmpty(!isCartEmpty);
  }, [showItem, props, perfumes]);

  const handleIsCartEmpty = () => {
    setIsCartEmpty(!isCartEmpty);
  };

  return (
    <div className="itemContainer">
      <div className="item">
        {!isCartEmpty && showItem ? (
          <div>
            <h1 className="itemName">{showItem.title}</h1>
            <img
              className="itemImage"
              src={showItem.image}
              alt={showItem.title}
            />
            {/* <p className="itemPrice">Price {showItem.price} SAR</p> */}
            <div>
              <p className="itemDes">{showItem.description}</p>
            </div>
            <button className="itemButton" onClick={() => onAdd(showItem)}>
              إضافة للسلة
            </button>
          </div>
        ) : (
          <div className="item">
            <h2> اختر منتج</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
