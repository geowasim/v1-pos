import { useContext, useEffect, useState } from "react";
import PerfumeContext from "../context/ProductContext";
import "./Products.css";

const Products = (props) => {
  const perfumes = useContext(PerfumeContext);
  const [idPerfume, setIdPerfume] = useState(null);

  useEffect(() => {
    props.findItem(idPerfume);
  }, [idPerfume, props]);
  return (
    <>
      <div className="products">
        <h3 style={{ textAlign: "center" }}>Products</h3>
        <div className="products">
          {perfumes.map((perfume) => (
            <div
              key={perfume.id}
              className={`${
                perfume.category === "Perfume"
                  ? "perfume"
                  : perfume.category === "Odor"
                  ? "odor"
                  : perfume.category === "Hair Mist"
                  ? "hairMist"
                  : "b1"
              } card`}
              onClick={() => setIdPerfume(perfume.id)}
            >
              <img src={perfume.image} alt={perfume.title} />
              <div className="product-category">
                <p>{perfume.category} </p>
              </div>
              <h4>{perfume.title} </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

/**
 * 
 * // Function to collect data
const getApiData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  ).then((response) => response.json());

  // update the state
  setUsers(response);
};
 */
