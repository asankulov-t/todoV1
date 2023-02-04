import React, {useState} from 'react';
import './App.css';
import Todolist, { TasksType } from "./Todolist";
import {v1} from "uuid";

export type filterTypes='all'|'completed'|'active'
function App() {


    let [tasks,setTasks]=useState<Array<TasksType>>([
        {id:v1(), title:'CSS',isdone:true},
        {id:v1(), title:'JS',isdone:false},
        {id:v1(), title:'React',isdone:false},
    ])

    let [filter,setFilter]=useState<filterTypes>('all')

    const changeFilter=(value:filterTypes)=>{
        setFilter(value)
    }
    //functions
    const removeTask=(id:string)=>{
        let res= tasks.filter((item)=>item.id!==id)
        setTasks(res)
    }

    let taskFilter=tasks

    if (filter=="completed"){
        taskFilter=tasks.filter((t)=>t.isdone===true)
    }
    if (filter=='active'){
        taskFilter=tasks.filter((t)=>t.isdone===false)
    }

    const addNewTask=(value:string)=>{
        let newTask={id:v1(),title:value,isdone:false};
        setTasks([newTask,...tasks])
    }

    const changeStatus=(id:string,isdone:boolean)=>{
        let res=tasks.map((t)=>{
            if (t.id==id){
                t.isdone=isdone
                return t
            }else return t
        })
        console.log(res)
        setTasks(res)

        // let task=tasks.find(t=>t.id==id);
        // if (task){
        //     task.isdone=isdone
        // }
        // setTasks([...tasks])
    }

  return (
    <div className="App">
      <Todolist title={'What to learn'}
                tasks={taskFilter}
                setFilter={changeFilter}
                removeFunc={removeTask}
                addNewTask={addNewTask}
                changeStatus={changeStatus}
                filter={filter}
      />

    </div>
  );
}
export default App;
