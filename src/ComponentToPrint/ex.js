import React, { useState, useEffect } from "react";

import MyLogo from "./logoForPrint.png";
import "./ComponentToPrint.css";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { cartItems, itemsPrice, method, paidMoney, change } = props;

  // console.log(props);

  const [data, setData] = useState(JSON.parse(localStorage.getItem("inv_sn")));

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("inv_sn"));
    if (items) {
      setData((data) => data, items);
    }
  }, [data]);

  return (
    <div className="fatorah" ref={ref}>
      <img src={MyLogo} alt="logo" style={{ boxShadow: "none" }} />
      <h3> كانديـــلا </h3>
      <br />
      <div className="perData">
        <p>معرض صناع العطور الثاني - الطائف</p>
        <p>Simplified Vat Invoice</p>
        <p>فاتورة ضريبية مبسطة</p>

        <p>Vat: 310430668500003 :الرقم الضريبي</p>

        <p>C.R: 1010208753 :س .ت</p>
      </div>
      <div className="g1">
        <div className="preDataNP">
          <p>Customer: Expo Customer</p>
          <p>Phone: </p>
        </div>
        <div className="preDataNP ">
          <p>
            Flat:
            <span style={{ color: "transparent" }}>
              ...................................
            </span>{" "}
          </p>
          <p>Building:</p>
        </div>
        <div className=" preDataNP ">
          <p>
            Street:{" "}
            <span style={{ color: "transparent" }}>
              ...............................
            </span>{" "}
          </p>
          <p>Block: </p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="casher">
        <p style={{ display: "none" }}>Cachier: </p>
        <p>Salesperson: EXPO </p>
        <div className="date">
          <p>{new Date().toLocaleString()}</p>
          <span>order# {data[data.length - 1].sn + 1}</span>
          {/* String(Number(year) - 1000) */}
        </div>
      </div>
      <div ref={ref} className="p-5">
        <table className="table">
          <thead>
            <tr>
              <td>Category</td>
              <td>Description</td>
              <td>Vol-مل</td>
              <td>Qty</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.length !== 0
              ? cartItems.map((cartProduct, key) => (
                  <tr key={key}>
                    <td>{cartProduct.category} </td>
                    <td>
                      <span>{cartProduct.description}</span>{" "}
                      <span>{cartProduct.title}</span>{" "}
                    </td>
                    <td>{cartProduct.vol} </td>
                    <td>{cartProduct.qty}</td>
                    <td>{cartProduct.price}</td>
                    <td>{cartProduct.qty * cartProduct.price}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
        <p style={{ marginTop: "15px" }}>
          ************************************************{" "}
        </p>
        <p style={{ marginTop: "15px" }}>
          VAT 15% {Math.ceil(itemsPrice * 15) / 100} SAR
        </p>
        <br />
        <h4 className="px-2">Total without VAT {Math.ceil(itemsPrice)} SAR</h4>
        <br />
        <h4 className="px-2">
          Total Amount include VAT: {(itemsPrice * 15) / 100 + itemsPrice} SAR
        </h4>
        <br />
        <p>
          {method === "Mada"
            ? "payment by : Mada(مدى)"
            : "payment by : Cash(كاش)"}
        </p>
        {method === "Mada" ? (
          <div className="paid">
            <p>
              <span>SAR {(itemsPrice * 15) / 100 + itemsPrice} </span> : المبلغ
              المستلم
            </p>
          </div>
        ) : (
          <>
            <p>
              <span>SAR {paidMoney} </span> : المبلغ المستلم
            </p>
            <p>
              <span>SAR {change} </span> : المتبقي للعميل
            </p>
          </>
        )}
      </div>
      <br />
      <p style={{ marginTop: "15px" }}>
        ************************************************{" "}
      </p>{" "}
      <br />
      <p> نشكركم لاختياركم منتجاتنا </p>
      <p> Thank you for choosing our products</p>
      <p>See you soon!</p>
      <p> 😊</p>
    </div>
  );
});

// const [allData, setAllData] = useState(
//   JSON.parse(localStorage.getItem("step_d")) || [
//     {
//       dateTime: `${
//         new Date().toLocaleTimeString() +
//         " - " +
//         new Date().toLocaleDateString()
//       }`,
//       sn: 20,
//       items: [],
//       totalWithoutVat: 0,
//       vat: 0,
//       total: 0,
//       qty: 0,
//       paymentMehod: "",
//       paid: 0,
//       change: 0,
//     },
//   ]
// );
