import "./../../styles/global.css";


function AppLayout({ children }) {


  return (

    <div className="app-container">


      <div className="app-card">


        {children}


      </div>


    </div>

  );


}


export default AppLayout;