import React from 'react'

const Input = ({handleChange,changeHandler}) => {
  return (
    <div className='flex space-x-3 text-lg justify-center'>
      <input className='w-xl border-none bg-gray-200 p-1' onChange={handleChange} type="text" placeholder='Enter your dish name'/>
      <button className='rounded-r-md p-3 bg-amber-600 cursor-pointer' onClick={changeHandler}>Search</button>
    </div>
  )
}

export default Input
