import React from "react";

export default function Mada(props) {
  const count = props.itemsPrice;

  return (
    <div className="mada">
      <div className="madaItems">
        <h2>
          Mada <span> </span> مدى{" "}
        </h2>
      </div>

      <h2 className="TP">
        المبلغ المطلوب : <span> {count * 0.15 + count} ريال </span>
      </h2>
    </div>
  );
}
