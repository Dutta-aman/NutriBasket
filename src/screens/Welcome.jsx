import { useEffect, useState } from "react";

import AppLayout from "../components/layout/AppLayout";

import "./../styles/global.css";


function Welcome({ onStart }) {


  const [time, setTime] = useState("");


  useEffect(() => {

    const updateTime = () => {

      const now = new Date();


      setTime(

        now.toLocaleTimeString([], {

          hour: "2-digit",

          minute: "2-digit"

        })

      );

    };


    updateTime();


    const interval = setInterval(
      updateTime,
      1000
    );


    return () => clearInterval(interval);


  }, []);



  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      day:"numeric",
      month:"long",
      year:"numeric"
    }
  );



  return (

    <AppLayout>


      <div className="welcome-card">


        <div className="brand-logo">

          🛒

        </div>



        <h1>

          NutriBasket

        </h1>



        <h2>

          Smart Shopping Assistant

        </h2>



        <p className="welcome-text">

          Scan products, track nutrition,
          and enjoy a smarter shopping experience.

        </p>




        <div className="feature-row">


          <div>

            ⚡

            <span>
              Instant Scan
            </span>

          </div>



          <div>

            🥗

            <span>
              Nutrition Info
            </span>

          </div>



          <div>

            💳

            <span>
              Easy Checkout
            </span>

          </div>


        </div>




        <div className="store-info">


          <span>
            🏪 FreshMart Store
          </span>


          <span>
            📅 {today}
          </span>


          <span>
            🕒 {time}
          </span>


        </div>




        <button

          className="start-btn"

          onClick={onStart}

        >

          🛍 Start Shopping

        </button>



      </div>


    </AppLayout>

  );

}


export default Welcome;