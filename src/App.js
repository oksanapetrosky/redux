import './App.css';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCategories from './Components/Filter/AllCategories';
// import { useState } from "react";


const App = () => {
 

  return (
    <div className="App">
      <div className='align'>
         <AllCategories />
         <Clothes />
      </div>
       
      <div className='map'>
      <Cart />
      
     </div>
     </div>
    
    
  );
}

export default App;

