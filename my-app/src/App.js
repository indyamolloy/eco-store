import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Womens from "./pages/womens/Womens";
import Mens from "./pages/mens/Mens";
import Jewelery from "./pages/jewelery/Jewelery";
import Electronics from "./pages/electronics/Electronics";
import ItemList from "./components/itemsList/ItemsList";
import Navbar from "./components/navbar/Navbar";
import SearchNavbar from "./components/searchNavbar/SearchNavbar";

function App() {
  const [items, setItems] = useState([]);
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState(false);

  //fetching data from api and setting state to object
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);

  function handleAdd(id, image, name, price) {
    const inBasket = basket.some((item) => item.id === id);
    if (!inBasket) {
      setBasket([
        ...basket,
        { id: id, image: image, name: name, price: price, quantity: 1 },
      ]);
    } else {
      alert("already in basket!");
    }
  }

  function handleClick() {
    setModal(!modal);
  }

  return (
    <BrowserRouter>
      <SearchNavbar basket={basket} handleClick={handleClick} modal={modal} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/womens"
          element={<Womens items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/mens"
          element={<Mens items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/jewelery"
          element={<Jewelery items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/electronics"
          element={<Electronics items={items} handleAdd={handleAdd} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;