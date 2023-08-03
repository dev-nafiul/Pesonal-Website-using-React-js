import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './component/page/Home/Home';
import About from './component/page/About/About';
import Portfolio from './component/page/Portfolio/Portfolio';
import Conatct from './component/page/Contact/Contact';
import Navbar from './component/page/Navbar/Navbar'
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
         <Routes>
           <Route index element={ <Home/>}/>
           <Route path='/component/page/About' element={ <About/>}/>
           <Route path='/component/page/Portfolio' element={ <Portfolio/>}/>
           <Route path='/component/page/Conatct' element={ <Conatct/>}/>
         </Routes>
      </BrowserRouter>
       
        
    </div>
  )
}

export default App
