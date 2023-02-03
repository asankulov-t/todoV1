import React from 'react';
import {filterTypes} from "./App";

export type TasksType={
    id:number,
    title:string,
    isdone:boolean
}

type PropsType={
    title:string,
    tasks:Array<TasksType>,
    removeFunc:(id:number)=>void,
    setFilter:(check:filterTypes)=>void
}

const Todolist = (props:PropsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.length!==0?
                    props.tasks.map((task, ind)=>{
                       return <li key={ind}><input type='checkbox' checked={task.isdone}/><span>{task.title}</span>
                           <button onClick={()=>props.removeFunc(task.id)}>x</button></li>
                    }):null
                }

            </ul>
            <div>
                <button onClick={()=>props.setFilter('all')}>All</button>
                <button onClick={()=>props.setFilter('active')}>Active</button>
                <button onClick={()=>props.setFilter('completed')}>Complete</button>
            </div>
        </div>
    );
};

export default Todolist;