import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
   
    <Router>
      {/* used commonly in all pages so <header /> is here */}
      <Header />
      <div className="App">
          <Routes>
              {/* To write two elements in one path use this syntax as below with help of fragment */}
              {/*   <Route  path="/" element = {<> <Header /> <Home />  </> }  /> */}
                <Route  path="/" element = { <Home /> }  />
                <Route  path="/checkout" element = {  <Checkout/> }  />
          </Routes>
      </div>
    </Router>
  
    
  );
}

export default App;
