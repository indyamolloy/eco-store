import "./itemsList.css";

function ItemsList({ items, category, handleAdd }) {
  //Filter out only items with rating > 4 for home page
  const featuredItems = items.filter(function (item) {
    if (category === "rating") {
      return item.rating.rate > 4;
    } else if (category === "womens") {
      return item.category === "women's clothing";
    } else if (category === "mens") {
      return item.category === "men's clothing";
    } else if (category === "jewelery") {
      return item.category === "jewelery";
    } else if (category === "electronics") {
      return item.category === "electronics";
    }
  });

  return (
    <div>
      <div className="container">
        <div className="allItemsContainer">
          {featuredItems.map((item) => {
            return (
              <div className="itemContainer" key={item.id}>
                <img className="productImg" src={item.image} alt="product" />
                <h2 className="productTitle">{item.title}</h2>
                <h2 className="productPrice">£{item.price}</h2>
                <p className="productDesc">
                  {item.description.substring(0, 100)}...
                </p>
                <button
                  onClick={() =>
                    handleAdd(item.id, item.image, item.title, item.price)
                  }
                >
                  Add
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemsList;