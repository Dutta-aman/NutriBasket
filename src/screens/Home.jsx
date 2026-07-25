import "./../styles/global.css";


function Home({ 
  onScan, 
  onBasket, 
  onCheckout,
  basket 
}) {


  const totalProducts = basket.reduce(
    (sum,item)=> sum + (item.quantity || 1),
    0
  );


  const totalBill = basket.reduce(
    (sum,item)=> 
      sum + (item.price * (item.quantity || 1)),
    0
  );


  const totalCalories = basket.reduce(
    (sum,item)=>
      sum + (item.calories * (item.quantity || 1)),
    0
  );


  const totalProtein = basket.reduce(
    (sum,item)=>
      sum + (item.protein * (item.quantity || 1)),
    0
  );


  const totalCarbs = basket.reduce(
    (sum,item)=>
      sum + (item.carbs * (item.quantity || 1)),
    0
  );


  const totalFat = basket.reduce(
    (sum,item)=>
      sum + (item.fat * (item.quantity || 1)),
    0
  );



  return (

    <div className="home-container">


      <div className="home-card">


        <h1>
          🛒 NutriBasket Dashboard
        </h1>


        <p className="dashboard-subtitle">
          Smart shopping with real-time nutrition tracking
        </p>




        <div className="session-box">


          <span>
            🟢 Session Active
          </span>


          <span>
            🏪 FreshMart Store
          </span>


        </div>




        <div className="dashboard-grid">


          <div className="dashboard-card">

            <div className="card-icon">
              🛍
            </div>

            <h2>
              {totalProducts}
            </h2>

            <span>
              Total Products
            </span>

          </div>





          <div className="dashboard-card">

            <div className="card-icon">
              💰
            </div>

            <h2>
              ₹{totalBill}
            </h2>

            <span>
              Current Bill
            </span>

          </div>





          <div className="dashboard-card">

            <div className="card-icon">
              🔥
            </div>

            <h2>
              {totalCalories}
            </h2>

            <span>
              Calories
            </span>

          </div>





          <div className="dashboard-card">

            <div className="card-icon">
              💪
            </div>

            <h2>
              {totalProtein} g
            </h2>

            <span>
              Protein
            </span>

          </div>





          <div className="dashboard-card">

            <div className="card-icon">
              🌾
            </div>

            <h2>
              {totalCarbs} g
            </h2>

            <span>
              Carbs
            </span>

          </div>





          <div className="dashboard-card">

            <div className="card-icon">
              🥑
            </div>

            <h2>
              {totalFat} g
            </h2>

            <span>
              Fat
            </span>

          </div>



        </div>





        <div className="home-buttons">


          <button
            className="start-btn"
            onClick={onScan}
          >

            📷 Scan Product

          </button>



          <button
            className="start-btn"
            onClick={onBasket}
          >

            🧺 View Basket

          </button>



          <button

            className="start-btn"

            disabled={basket.length===0}

            onClick={onCheckout}

          >

            💳 Checkout

          </button>



        </div>



      </div>


    </div>


  );

}


export default Home;