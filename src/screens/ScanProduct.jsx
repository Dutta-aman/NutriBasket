import "./../styles/global.css";
import products from "./../data/products";


function ScanProduct({ onProduct }) {


  function simulateScan(){


    const randomIndex = Math.floor(
      Math.random() * products.length
    );


    const product = products[randomIndex];


    onProduct(product.id);


  }



  return (

    <div className="scan-container">


      <div className="scan-card premium-scan">



        <div className="scan-header">


          <div className="scan-icon">

            📷

          </div>


          <h1>

            Product Scanner

          </h1>


          <p>

            Scan your product barcode to view
            price and nutrition information.

          </p>


        </div>





        <div className="scanner-ui">


          <div className="scanner-frame premium-scanner">


            <div className="scan-corner top-left"></div>

            <div className="scan-corner top-right"></div>

            <div className="scan-corner bottom-left"></div>

            <div className="scan-corner bottom-right"></div>


            <div className="scan-line"></div>


          </div>


        </div>





        <div className="scanner-status premium-status">


          <span>

            🟢

          </span>


          Ready to Scan


        </div>





        <p className="scan-help">

          Place barcode inside the frame

        </p>





        <button

          className="start-btn premium-btn"

          onClick={simulateScan}

        >

          ⚡ Scan Product

        </button>



      </div>


    </div>

  );

}


export default ScanProduct;