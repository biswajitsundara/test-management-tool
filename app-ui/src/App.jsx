import "./App.css";
import * as React from "react";
import NavBar from "./Components/Navbar/Navbar";
import AppTabs from "./AppTabs";

function App() {

  return (
    <>
     <NavBar />
     <div className="app-container">
         <AppTabs />
     </div>
    </>
  );
}

export default App;
