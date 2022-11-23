import Banner from "./components/layouts/Banner";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import SingleProductPage from "./pages/SingleProductPage";
import { useState } from "react";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  return (
    <div className="App">
      <Banner />
      <Header cartQuantity={cartQuantity} />
      <Navbar />
      <SingleProductPage setCartQuantity={setCartQuantity} />
    </div>
  );
}

export default App;
