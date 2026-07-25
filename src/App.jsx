import { useState } from "react";

import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import ScanProduct from "./screens/ScanProduct";
import ProductInfo from "./screens/ProductInfo";
import Basket from "./screens/Basket";
import Checkout from "./screens/Checkout";
import PaymentSuccess from "./screens/PaymentSuccess";

function App() {

  const [page, setPage] = useState("welcome");

  const [basket, setBasket] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  function addProduct(product) {

    const existing = basket.find(
      item => item.id === product.id
    );

    if (existing) {

      const updated = basket.map(item =>

        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1
            }
          : item

      );

      setBasket(updated);

    } else {

      setBasket([
        ...basket,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

    setPage("basket");

  }

  function updateQuantity(index, change) {

    const updated = [...basket];

    const currentQty = updated[index].quantity || 1;

    const newQty = currentQty + change;

    if (newQty <= 0) {

      updated.splice(index, 1);

    } else {

      updated[index].quantity = newQty;

    }

    setBasket(updated);

  }

  function handleExit() {

    setBasket([]);

    setSelectedProduct(null);

    setPage("home");

  }

  if (page === "welcome") {

    return (
      <Welcome
        onStart={() => setPage("home")}
      />
    );

  }

  if (page === "home") {

    return (
      <Home
        basket={basket}
        onScan={() => setPage("scan")}
        onBasket={() => setPage("basket")}
      />
    );

  }

  if (page === "scan") {

    return (
      <ScanProduct
        onProduct={(id) => {

          setSelectedProduct(id);

          setPage("product");

        }}
      />
    );

  }

  if (page === "product") {

    return (
      <ProductInfo
        productId={selectedProduct}
        onBack={() => setPage("home")}
        onAdd={addProduct}
      />
    );

  }

  if (page === "basket") {

    return (
      <Basket
        basket={basket}
        setBasket={setBasket}
        updateQuantity={updateQuantity}
        onContinue={() => setPage("home")}
        onCheckout={() => setPage("checkout")}
      />
    );

  }

  if (page === "checkout") {

    return (
      <Checkout
        basket={basket}
        onPayment={() => setPage("success")}
      />
    );

  }

  if (page === "success") {

    return (
      <PaymentSuccess
        basket={basket}
        onExit={handleExit}
      />
    );

  }

  return null;

}

export default App;