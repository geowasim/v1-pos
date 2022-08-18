import Products from "./products/Products";
import "./App.css";
import Item from "./Item/Item";
import { useState, useEffect, createContext } from "react";
import Basket from "./cart/Cart";

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    date.getFullYear(),

    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("");
}

const OrderNumberContext = createContext();

function App() {
  const [item, setItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState(formatDate(new Date()) + 1000);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("inv_sn")) || [
      {
        sn: orderNumber,
        items: [],
        totalWithoutVat: 0,
        vat: 0,
        Amount: 0,
        qty: 0,
        method: "",
        paid: 0,
        change: 0,
        dateTime: `${
          new Date().toLocaleTimeString() +
          " - " +
          new Date().toLocaleDateString()
        }`,
      },
    ]
  );

  // getData for component
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("inv_sn"));
    if (items) {
      setData((data) => data, items);
    }
  }, [data]);

  // setData
  useEffect(() => {
    if (data) {
      localStorage.setItem("inv_sn", JSON.stringify(data));
    }
  }, [data]);

  const handleData = (ob) => {
    const serialN = Number(data[data.length - 1].sn) + 1;

    setData((data) => [
      ...data,
      { sn: serialN, Ammount: ob, date: new Date().toLocaleDateString() },
    ]);
  };

  const resetCartItems = () => {
    setCartItems([]);
  };
  const findItem = (id) => {
    setItem(id);
  };

  // add+
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // remove-
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <OrderNumberContext.Provider value={orderNumber}>
      <div className="App">
        <header
          className="App-header"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Products findItem={findItem} />
        </header>
        <Item item={item} onAdd={onAdd} />
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          resetCartItems={resetCartItems}
          handleData={handleData}
        />
        {/* <Invoice cartItems={cartItems} totalPrice={totalPrice} /> */}
      </div>
    </OrderNumberContext.Provider>
  );
}

export default App;

/* <button onClick={handleData}>,,,,,,,</button>
        {data.map((item) => (
          <div
          key={item.sn + 1}
            style={{ display: "flex", flexDirection: "column" }}
            >
            <p>SN/{item.sn}/</p>
            <p>Ammount:/{item.am}/</p>
          </div>
        ))} */
