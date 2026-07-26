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


      <div className="welcome-card premium-welcome">


        <div className="brand-logo animated-logo">

          🛒

        </div>



        <h1>

          Nutri<span>Basket</span>

        </h1>



        <h2>

          Smart Shopping Assistant

        </h2>



        <p className="welcome-text">

          Experience smarter grocery shopping with
          real-time product scanning, nutrition tracking,
          and seamless checkout.

        </p>




        <div className="feature-row premium-features">


          <div className="feature-card">

            <strong>
              ⚡
            </strong>

            <span>
              Instant Scan
            </span>

            <small>
              Quick product detection
            </small>

          </div>



          <div className="feature-card">

            <strong>
              🥗
            </strong>

            <span>
              Nutrition Info
            </span>

            <small>
              Track calories & nutrients
            </small>

          </div>



          <div className="feature-card">

            <strong>
              💳
            </strong>

            <span>
              Easy Checkout
            </span>

            <small>
              Fast digital payment
            </small>

          </div>


        </div>





        <div className="store-info premium-info">


          <div>

            🏪

            <p>
              FreshMart Store
            </p>

          </div>



          <div>

            📅

            <p>
              {today}
            </p>

          </div>



          <div>

            🕒

            <p>
              {time}
            </p>

          </div>


        </div>





        <button

          className="start-btn premium-btn"

          onClick={onStart}

        >

          🛍 Start Shopping

        </button>



      </div>


    </AppLayout>

  );

}


export default Welcome;