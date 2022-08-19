import { useEffect, useState } from "react";
import { ComponentToPrint } from "../ComponentToPrint/ComponentToPrint";

export default function Invoices(props) {
  const { readAmmount } = props;
  // console.log(readAmmount);

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
        <div key={item.sn + 1} style={{ margin: "10px 25px" }}>
          <hr />
          <p>
            SN/{item.sn}/{" "}
            <span>
              {" "}
              <button onClick={() => console.log("print")} disabled>
                Print
              </button>
            </span>
          </p>
          <hr />
        </div>
      ))}
    </>
  );
}
