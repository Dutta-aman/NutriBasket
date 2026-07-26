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


      <div className="product-card premium-product">



        <div className="product-hero">


          <div className="product-image premium-product-icon">

            🛒

          </div>



          <h1>

            {product.name}

          </h1>



          <p className="brand premium-brand">

            🏷 {product.brand}

          </p>


        </div>





        <div className="nutrition-grid premium-nutrition">



          <div className="price-card">

            <h2>
              ₹{product.price}
            </h2>

            <span>
              Price
            </span>

          </div>





          <div>

            <h2>
              🔥 {product.calories}
            </h2>

            <span>
              Calories
            </span>

          </div>





          <div>

            <h2>
              💪 {product.protein}g
            </h2>

            <span>
              Protein
            </span>

          </div>





          <div>

            <h2>
              🌾 {product.carbs}g
            </h2>

            <span>
              Carbs
            </span>

          </div>





          <div>

            <h2>
              🥑 {product.fat}g
            </h2>

            <span>
              Fat
            </span>

          </div>


        </div>






        <div className="product-buttons premium-product-buttons">



          <button

            className="secondary-btn"

            onClick={onBack}

          >

            ← Back

          </button>





          <button

            className="start-btn premium-btn"

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