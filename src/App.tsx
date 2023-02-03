import React, {useState} from 'react';
import './App.css';
import Todolist, { TasksType } from "./Todolist";

export type filterTypes='all'|'completed'|'active'
function App() {


    let [tasks,setTasks]=useState<Array<TasksType>>([
        {id:1, title:'CSS',isdone:true},
        {id:2, title:'JS',isdone:false},
        {id:3, title:'React',isdone:false},
    ])

    let [filter,setFilter]=useState<filterTypes>('active')

    const changeFilter=(value:filterTypes)=>{
        setFilter(value)
    }
    //functions
    const removeTask=(id:number)=>{
        let res= tasks.filter((item)=>item.id!==id)
        setTasks(res)
    }

    let taskFilter=tasks

    if (filter=="completed"){
        taskFilter=tasks.filter((t)=>t.isdone==true)
    }
    if (filter=='active'){
        taskFilter=tasks.filter((t)=>t.isdone==false)
    }


  return (
    <div className="App">
      <Todolist title={'What to learn'}
                tasks={taskFilter}
                setFilter={changeFilter}
                removeFunc={removeTask}/>

    </div>
  );
}
export default App;
