import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import { api } from "./api";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProducts();
  }, [reload]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <>
      {<Header setShowPopUp={setShowPopUp} onAddProduct={handleAddProduct} />}
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center mt-32 gap-10 mb-10">
          {products.map((product) => (
            <Card key={product.id} product={product} setReload={setReload} />
          ))}
        </div>
      </div>
      {showPopUp && (
        <Popup setShowPopUp={setShowPopUp} onAddProduct={handleAddProduct} setReload={setReload}/>
      )}
    </>
  );
}

export default App;
