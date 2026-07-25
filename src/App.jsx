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

    const existingProduct = basket.find(
      item => item.id === product.id
    );


    if (existingProduct) {

      const updatedBasket = basket.map(item =>

        item.id === product.id

          ? {
              ...item,
              quantity: (item.quantity || 1) + 1
            }

          : item

      );


      setBasket(updatedBasket);

    }

    else {

      setBasket([
        ...basket,
        {
          ...product,
          quantity: 1
        }
      ]);

    }


    setPage("home");

  }



  function removeProduct(index) {

    const updatedBasket = basket.filter(
      (_, i) => i !== index
    );


    setBasket(updatedBasket);

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

        onCheckout={() => setPage("checkout")}

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

        onAdd={addProduct}

        onBack={() => setPage("scan")}

      />

    );

  }



  if (page === "basket") {

    return (

      <Basket

        basket={basket}

        setBasket={setBasket}

        removeProduct={removeProduct}

        onCheckout={() => setPage("checkout")}

        onContinue={() => setPage("home")}

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



  return (

    <PaymentSuccess />

  );


}


export default App;