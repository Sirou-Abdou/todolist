import React from "react"
import todo_icon from "../assets/todo_icon.png"
import TodoItemsList from "./ToDoItemsList"

const Todo = () => {
    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
            <div className="flex item-center mt-7 gap-2">
                <img className= "w-8" src={todo_icon} alt="To DO icon "/>
                <h1 className="text-xl font-semibold">To-Do List</h1>
            </div>

            <div>
                <div className="flex items-center my-7 bg-gray-200 rounded-full">
                    <input 
                    className="bg-transparent bordert-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
                    type="text" placeholder="Add your text"/>
                    <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">Add +</button>
                </div>
                <div>
                    <TodoItemsList text= "Text 1"/>
                    <TodoItemsList text= "Text 2"/>
                    <TodoItemsList text= "Text 3"/>
                </div>
            </div>
        </div>
    )
}

export default Todo