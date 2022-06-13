import React from "react";
import ItemsList from "../../components/itemsList/ItemsList";

function Jewelery({ items, handleAdd }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / JEWELERY</h5>
      <ItemsList items={items} category="jewelery" handleAdd={handleAdd} />
    </div>
  );
}

export default Jewelery;
