import "./App.css";
import * as React from "react";
import NavBar from "./Components/Navbar/Navbar";
import AppTabs from "./AppTabs";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {

  return (
    <>
    <Provider store={store}>
     <NavBar />
     <div className="app-container">
         <AppTabs />
     </div>
     </Provider>
    </>
  );
}

export default App;
