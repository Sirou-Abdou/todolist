import React, { useState, useEffect, useRef } from "react"
import todo_icon from "../assets/todo_icon.png"
import TodoItemsList from "./ToDoItemsList"

const Todo = () => {
    const [tasks, setTasks] = useState(localStorage.getItem("localStorageTasks") ?
JSON.parse(localStorage.getItem("localStorageTasks")) : [])
    const inputRef = useRef();

    useEffect(()=> {
        localStorage.setItem("localStorageTasks", JSON.stringify(tasks))}
        ,[tasks])

    function toggle(id) {
        setTasks(prevTasks => { 
            return prevTasks.map(task => {
                if(task.id ===id) 
                    return {...task, isCompleted:!task.isCompleted};
                return task
            })
        })
    }

    function handleDelete(id) {
        setTasks((prevTasks)=> {
            return prevTasks.filter((task) => task.id !== id)

        })
    }

    function handleAddTask() {
        const inputText = inputRef.current.value.trim();
        if (inputText !== ""){
            const newTask = {
                id : Date.now(),
                text : inputText,
                isCompleted: false
            }
            setTasks(prevTasks => [ ...prevTasks, newTask ])
            inputRef.current.value= ""
        }
    }

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
                    type="text" placeholder="Add your text"
                    name="input" ref={inputRef}
                    />
                    <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer" onClick={handleAddTask}>Add +</button>
                </div>
                <div>
                    {tasks.map((task, index)=> 
                    <TodoItemsList 
                    key = {index} 
                    text = {task.text} 
                    id = {task.id} 
                    isCompleted = {task.isCompleted}
                    handleDelete = {handleDelete}
                    toggle={toggle}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Todo