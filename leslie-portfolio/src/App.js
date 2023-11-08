import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import IntelligentDemand from "./components/pages/work/IntelligentDemand";
import Mag from "./components/pages/work/Mag"
import Otter from "./components/pages/work/Otter"
import Navigation from './components/pages/navBar/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/intelligentdemand' exact Component={IntelligentDemand} />
        <Route path='/magneticcreative' exact Component={Mag} />
        <Route path='/otterbox' exact Component={Otter} />
      </Routes>
    </Router>
  );
}

export default App;
