import { useEffect, useState } from "react";

export default function Invoices() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("inv_sn")));
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("inv_sn"));
    if (items) {
      setData((data) => data, items);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      localStorage.setItem("inv_sn", JSON.stringify(data));
    }
  }, [data]);

  return (
    <>
      {data.map((item) => (
        <div
          key={item.sn + 1}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <hr />
          <p>SN/{item.sn}/</p>
          <hr />
        </div>
      ))}
    </>
  );
}

/**
 * || [
      {
        sn: 0,
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
 */
