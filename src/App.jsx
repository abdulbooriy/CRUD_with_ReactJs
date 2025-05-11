import { useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  return (
    <>
      {<Header setShowPopUp={setShowPopUp} onAddProduct={handleAddProduct} />}
      <Card />
      {showPopUp && (
        <Popup setShowPopUp={setShowPopUp} onAddProduct={handleAddProduct} />
      )}
    </>
  );
}

export default App;
