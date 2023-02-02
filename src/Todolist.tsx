import React from 'react';

export type TasksType={
    id:number,
    title:string,
    isdone:boolean
}

type PropsType={
    title:string,
    tasks:Array<TasksType>
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
                       return <li key={ind}><input type='checkbox' checked={task.isdone}/><span>{task.title}</span></li>
                    }):null
                }

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Complete</button>
            </div>
        </div>
    );
};

export default Todolist;