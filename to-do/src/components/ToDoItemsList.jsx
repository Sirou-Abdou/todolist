import React from "react"
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const TodoItemsList = ({text, id, handleDelete, isCompleted, toggle}) => {

    return (
        <div className="flex items-center my-3  gap-2">
            <div className="flex flex-1 items-center cursor-pointer" onClick={()=> toggle(id)}>
                <img src={isCompleted ? tick : not_tick} alt="tick Icon" className="w-7"/>
                <p className={`text-slate-700 ml-4 text-[17px] ${isCompleted && "line-through"}`}>{text}</p>
            </div>
            <button onClick={()=> handleDelete(id)}>
                <img src={delete_icon} alt= "Delete icon" className="w-3.5 cursor-pointer"/>
            </button>
        </div>
    )
}

export default TodoItemsList;