import React, { useState } from "react";
import Popup from "../Popup/Popup";


const Header = ({ setShowPopUp, onAddProduct }) => {
  const [showLocalPopup, setShowLocalPopup] = useState(false);

  return (
    <header className="w-full h-20 bg-[#1C1E53] text-white flex items-center fixed top-0">
      <div className="container mx-auto">
        <div className="flex justify-between px-20 font-[Inter]">
          <h1 className="text-4xl font-medium">Products</h1>
          <button
            onClick={() => setShowLocalPopup(true)}
            className="w-[200px] h-[50px] bg-[#2563eb] rounded-3xl hover:bg-blue-700 text-white font-[500] text-center text-[18px]">
            <span>Add Products</span>
          </button>
        </div>
      </div>
      {showLocalPopup && (
        <Popup setShowPopUp={setShowLocalPopup} onAddProduct={onAddProduct} />
      )}
    </header>
  );
};

export default Header;
