import "./../styles/global.css";
import products from "./../data/products";


function ScanProduct({ onProduct }) {


  function simulateScan(){


    const randomIndex = Math.floor(
      Math.random()*products.length
    );


    const product = products[randomIndex];


    onProduct(product.id);


  }



  return (

    <div className="scan-container">


      <div className="scan-card">


        <h1>
          📷 Barcode Scanner
        </h1>


        <p>
          Place the product barcode inside the scanner area.
        </p>




        <div className="scanner-ui">


          <div className="scanner-frame">


            <div className="scan-line"></div>


          </div>


        </div>





        <div className="scanner-status">

          🟢 Ready to Scan

        </div>





        <button

          className="start-btn"

          onClick={simulateScan}

        >

          Scan Product

        </button>




      </div>


    </div>


  );

}


export default ScanProduct;