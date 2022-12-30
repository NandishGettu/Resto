import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Order from './Order';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
