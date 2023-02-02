import React from 'react';
import './App.css';
import Todolist, { TasksType } from "./Todolist";
function App() {

    let tasks1:Array<TasksType>=[
        {id:1, title:'CSS',isdone:true},
        {id:2, title:'JS',isdone:false},
        {id:3, title:'React',isdone:false},
    ]



    //functions
    const removeTask=(id:number)=>{
        let res= tasks1.filter((item)=>item.id!==id)
        console.log(res)
    }

  return (
    <div className="App">
      <Todolist title={'What to learn'} tasks={tasks1} removeFunc={removeTask}/>

    </div>
  );
}
export default App;
