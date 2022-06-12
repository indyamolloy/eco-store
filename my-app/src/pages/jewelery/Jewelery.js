import React from "react";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";
import Navbar from "../../components/navbar/Navbar";

import ItemsList from "../../components/itemsList/ItemsList";

function Jewelery({ items, handleAdd }) {
  return (
    <div>
      <h1>Jewelery</h1>
      <ItemsList items={items} category="jewelery" handleAdd={handleAdd} />
    </div>
  );
}

export default Jewelery;