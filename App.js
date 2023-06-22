import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return(
    <Router>
      
        <Route exact path="/" Component={Home}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>
      
    </Router>
  );
}


export default App;