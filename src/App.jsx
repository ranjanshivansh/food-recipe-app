import React from 'react'
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';
import MealInfo from './Components/MealInfo';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>
    </Routes>
      
    
  )
}

export default App
