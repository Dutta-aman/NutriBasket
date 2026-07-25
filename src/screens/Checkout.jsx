import "./../styles/global.css";


function Checkout({
  basket,
  onPayment
}) {


  const total = basket.reduce(

    (sum,item)=>

      sum + (item.price * (item.quantity || 1)),

    0

  );



  return (

    <div className="checkout-container">



      <div className="checkout-card">



        <h1>
          💳 Checkout
        </h1>




        <p>
          Review your order before payment
        </p>





        <div className="bill-box">


          <h2>
            Final Amount
          </h2>


          <h1>
            ₹{total}
          </h1>


        </div>






        <div className="qr-box">


          <div className="qr-placeholder">

            ▦

          </div>



          <p>
            Scan QR to Pay using UPI
          </p>


        </div>





        <button

          className="start-btn"

          onClick={onPayment}

        >

          Pay ₹{total}

        </button>




      </div>


    </div>


  );

}



export default Checkout;