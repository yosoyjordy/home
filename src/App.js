import React from "react";
import "./App.css";
import { NavBar } from "./components/navBar";
import { Index } from "./views";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Resumen } from "./views/resumen";
import { Portafolio } from "./views/portafolio";
import { Contacto } from "./views/contacto";
import { Footer } from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home">
            <Index />
          </Route>
          <Route path="/resumen">
            <Resumen />
          </Route>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
