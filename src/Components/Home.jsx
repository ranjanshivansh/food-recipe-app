import React, { useEffect, useState } from 'react'
import Input from './Input'
import Header from './Header'
import MealCards from './MealCards'
import Loading from './Loading'


const Home = () => {
  const [recipe,setRecipe]=useState();
  const [search,setSearch]=useState();
  const [loading,setLoading]=useState(false);
  const getRecipe=async(search)=>{
    try{
    setLoading(true);
    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const response=await data.json();
    console.log(response.meals);
    setRecipe(response.meals);
}catch(err){
  console.log(err);
}finally{
  setLoading(false);
}
}
const getDishName=(e)=>{
  const value=e.target.value;
  console.log(value); 
  setSearch(value);
}
const getRandomMeals = async () => {
  try {
    setLoading(true);
    const requests = Array.from({ length: 6 }, async () => {
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const response = await data.json();
      return response.meals[0];
    });

    const meals = await Promise.all(requests);
    setRecipe(meals);
  } catch (err) {
    console.log(err);
  }finally{
    setLoading(false);
  }
};
useEffect(()=>{
  getRandomMeals();
},[]);

  return (
    <>
    <div className='space-y-4'>
      <Header/>
     <Input handleChange={getDishName} changeHandler={()=>getRecipe(search)}/>
     {loading?<Loading/>:
     <MealCards recipelist={recipe}/>
  }
    </div>
    </>
  )
}

export default Home
