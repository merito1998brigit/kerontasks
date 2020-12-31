import React from "react";
import './App.css';
import MainPage from "./components/mainPage";
import Detailpage from "./components/detailPage";
import Header from "./components/header";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

function App() {
  return (
     <Router>
      <Header/>
      <Switch>
       <Route exact path="/" component={MainPage}/>
       <Route path="/user/:id" component={Detailpage}/>
       </Switch>
     </Router> 
  );
}

export default App;
