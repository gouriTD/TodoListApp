import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';


function InputForm() {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch();

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(inputText))
        setInputText('')
    }
  return (
    <form onSubmit={onSubmitHandler}>
        <input className='w-[90%] p-4 text-2xl focus:outline-none rounded-s-lg'  type="text" placeholder='Enter todo text' onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
        <button className='w-[10%] py-4 px-8 bg-blue-700 text-2xl text-white rounded-e-lg active:scale-95 ' type='submit' >Add</button>
    </form>
  )
}

export default InputForm
