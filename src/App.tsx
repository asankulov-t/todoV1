import React from 'react';
import './App.css';
import Todolist, { TasksType } from "./Todolist";
function App() {

    let tasks1:Array<TasksType>=[
        {id:1, title:'CSS',isdone:true},
        {id:2, title:'JS',isdone:false},
        {id:3, title:'React',isdone:false},
    ]

    let tasks2:Array<TasksType>=[
        {id:1, title:'Terminator',isdone:true},
        {id:2, title:'Betmen',isdone:true},
        {id:3, title:'Pretty Woman',isdone:true},
    ]

  return (
    <div className="App">
      <Todolist title={'What to learn'} tasks={tasks1}/>
      <Todolist title={'Songs'} tasks={tasks2}/>

    </div>
  );
}
export default App;
