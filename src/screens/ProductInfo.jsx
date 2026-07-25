import "./../styles/global.css";
import products from "./../data/products";


function ProductInfo({ 
  productId,
  onAdd,
  onBack
}) {


  const product = products.find(
    item => item.id === productId
  );



  if(!product){

    return (

      <div className="product-container">

        <div className="product-card">

          <h1>
            Product Not Found
          </h1>

        </div>

      </div>

    );

  }



  return (

    <div className="product-container">


      <div className="product-card">



        <div className="product-image">

          🛒

        </div>




        <h1>
          {product.name}
        </h1>




        <p className="brand">

          Brand: {product.brand}

        </p>





        <div className="nutrition-grid">



          <div>

            <h2>
              ₹{product.price}
            </h2>

            <span>
              Price
            </span>

          </div>




          <div>

            <h2>
              {product.calories}
            </h2>

            <span>
              Calories
            </span>

          </div>




          <div>

            <h2>
              {product.protein}g
            </h2>

            <span>
              Protein
            </span>

          </div>




          <div>

            <h2>
              {product.carbs}g
            </h2>

            <span>
              Carbs
            </span>

          </div>




          <div>

            <h2>
              {product.fat}g
            </h2>

            <span>
              Fat
            </span>

          </div>


        </div>





        <div className="product-buttons">


          <button

            className="secondary-btn"

            onClick={onBack}

          >

            ← Cancel

          </button>



          <button

            className="start-btn"

            onClick={() => onAdd(product)}

          >

            🧺 Add to Basket

          </button>



        </div>




      </div>


    </div>

  );

}


export default ProductInfo;