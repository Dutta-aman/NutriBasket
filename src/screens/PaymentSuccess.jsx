import "./../styles/global.css";


function PaymentSuccess(){


  return (


    <div className="checkout-container">



      <div className="checkout-card success-card">



        <div className="success-icon">

          ✅

        </div>





        <h1>

          Payment Successful

        </h1>





        <p>

          Thank you for shopping with NutriBasket

        </p>






        <div className="verification-box">



          <p>
            Payment Status
          </p>


          <h3>
            🟢 Verified
          </h3>





          <p>
            Transaction ID
          </p>


          <h3>
            NB20260723001
          </h3>





          <p>
            Amount Paid
          </p>


          <h2>
            ₹60
          </h2>





          <p>
            Date & Time
          </p>


          <h3>
            23 July 2026
          </h3>



        </div>






        <button

          className="start-btn"

        >

          ✔ Confirm & Exit

        </button>




      </div>



    </div>


  );


}



export default PaymentSuccess;