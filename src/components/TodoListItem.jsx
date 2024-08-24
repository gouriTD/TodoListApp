import React, { useEffect } from 'react'
import ListBtn from './ListBtn'
import { useState } from 'react'
import { updateTodo,removeTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'


function TodoListItem({inputlabel, isInputChecked, id}) {

    const[label,setLabel] = useState(inputlabel)
    const [ischecked , setIschecked] = useState(isInputChecked)
    const [isEditable,setIsEditable] = useState(false)

    const dispatch = useDispatch();

    const updateHandler =()=>{
        const newTodo = {
            id: id,
            text: label,
            isCompleted: ischecked
        }
        console.log(newTodo)
        dispatch(updateTodo(newTodo))
    }

    useEffect(()=>{
        console.log(ischecked)
        updateHandler()
    },[ischecked])

   

    const onSave = ()=>{
        updateHandler()
        setIsEditable(false)
    }

    const onEdit = ()=>{
        setIsEditable(true)
    }

    const onRemove = ()=>{
        dispatch(removeTodo(id))
    }

    const onCheckToggle = (e)=>{
        setIschecked(prevChecked=>!prevChecked)
    }

    return (
        <div className={`w-full mt-6  p-4 text-2xl focus:outline-none rounded-lg ${isEditable? 'bg-green-100':'bg-blue-200 '} flex`}>
            {/* 1st section of todo with checkbox and text */}
            <div className='flex w-[90%]'>
                <input type="checkbox" checked={ischecked} onChange={(e)=>onCheckToggle(e)} disabled={isEditable}/>
                <div className='mx-4 w-full'>
                    <h3 className={`${isEditable? 'hidden' : 'block'} ${ischecked?' line-through':''}`}> {label} </h3>
                    <input className={`px-2 w-full ${isEditable? 'block' : 'hidden'}`} type="text" value={label} onChange={(e)=>setLabel(e.target.value)}/>
                </div>
            </div>
            {/* second section with edit and delete buttons */}
            <div className='w-[10%] flex justify-between'>
                <ListBtn label={isEditable? 'save':'edit'} onClick={isEditable? onSave : onEdit} isDisabled={ischecked}/>
                <ListBtn label="delete" className=" bg-red-800" onClick={onRemove} isDisabled={isEditable}/>
            </div>
        </div>
    )
}

export default TodoListItem
