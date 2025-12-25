import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Loading from './Loading';
const MealInfo = () => {
    const [details,setDetails]=useState();
    const [loading,setLoading]=useState(false);
    const {mealid}=useParams();
    const getDetails=async(mealid)=>{
        try{
        setLoading(true);
        const data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const response=await data.json();
        setDetails(response.meals[0]);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(mealid){
            getDetails(mealid);
        }
    },[mealid]);
    if(!details){
        return <p className="text-center mt-10">Loading recipe...</p>;
    }
    
  return (
    <>
    {loading?<Loading/>:
    <div className='space-y-20'>
    <Header/>
    <div className='flex justify-center items-center gap-4 border border-white rounded-md bg-amber-200'>
        <img
            src={details.strMealThumb}
            alt={details.strMeal}
            className="w-full h-96 object-cover m-5"
          />
        <div className="">
            <h1 className='text-xl font-bold'>Recipe Details</h1>
            <button>{details.strMeal}</button>
            <h3 className='text-xl font-bold'>Instruction's</h3>
            <p>{details.strInstructions}</p>
        </div>
    </div>
    </div>}
    </>
  )
}

export default MealInfo
