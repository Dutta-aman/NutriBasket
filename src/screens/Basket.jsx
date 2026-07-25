import "./../styles/global.css";


function Basket({
  basket,
  setBasket,
  onCheckout,
  onContinue
}) {



  function removeItem(index){


    const updatedBasket = basket.filter(
      (_,i)=>i!==index
    );


    setBasket(updatedBasket);


  }





  const total = basket.reduce(

    (sum,item)=>

      sum + (item.price * (item.quantity || 1)),

    0

  );





  return (

    <div className="basket-container">


      <div className="basket-card">


        <h1>
          🧺 My Basket
        </h1>




        {
          basket.length===0 ?


          (

            <div className="empty-box">

              <h2>
                Your basket is empty
              </h2>


              <p>
                Scan products to add items
              </p>


              <button

                className="start-btn"

                onClick={onContinue}

              >

                📷 Start Scanning

              </button>


            </div>

          )


          :


          basket.map((item,index)=>(


            <div

              className="basket-item"

              key={index}

            >



              <div>


                <h2>
                  {item.name}
                </h2>


                <p>
                  Brand: {item.brand}
                </p>


                <p>
                  Quantity: {item.quantity || 1}
                </p>


                <p>
                  Calories: {item.calories * (item.quantity || 1)}
                </p>


              </div>





              <div className="basket-right">


                <h2>

                  ₹{item.price * (item.quantity || 1)}

                </h2>




                <button

                  className="remove-btn"

                  onClick={()=>removeItem(index)}

                >

                  Remove

                </button>


              </div>



            </div>


          ))

        }







        {
          basket.length>0 &&


          <>


          <div className="total-box">


            <h2>
              Total Amount
            </h2>


            <h1>
              ₹{total}
            </h1>


          </div>





          <div className="basket-actions">


            <button

              className="secondary-btn"

              onClick={onContinue}

            >

              ← Continue Shopping

            </button>




            <button

              className="start-btn"

              onClick={onCheckout}

            >

              💳 Proceed Checkout

            </button>


          </div>


          </>


        }



      </div>


    </div>


  );

}



export default Basket;