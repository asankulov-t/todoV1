import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterTypes} from "./App";

export type TasksType = {
    id: string,
    title: string,
    isdone: boolean
}
//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
type PropsType = {
    title: string,
    tasks: Array<TasksType>,
    removeFunc: (id: string) => void,
    setFilter: (check: filterTypes) => void,
    addNewTask: (value: string) => void
}

const Todolist = (props: PropsType) => {
    let [value, setValue] = useState('');

    //local functions
    const addTaskLocalFunc = () => {
        if (value.length != 0) {
            props.addNewTask(value);
        }
        setValue('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode == 13) {
            addTaskLocalFunc()
        }
    }

    const onFilterAll = () => props.setFilter('all');
    const onFilterActive = () => props.setFilter('active');
    const onFilterCompleted = () => props.setFilter('completed');

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={value}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressEnter}
                       type="text"/>
                <button onClick={addTaskLocalFunc}>+</button>
            </div>
            <ul>
                {props.tasks.length !== 0 ?
                    props.tasks.map((task, ind) => {
                        const deleteHandler = () => props.removeFunc(task.id)
                        return <li key={ind}><input type='checkbox' checked={task.isdone}/><span>{task.title}</span>
                            <button onClick={deleteHandler}>x</button>
                        </li>
                    }) : null
                }

            </ul>
            <div>
                <button onClick={onFilterAll}>All</button>
                <button onClick={onFilterActive}>Active</button>
                <button onClick={onFilterCompleted}>Complete</button>
            </div>
        </div>
    );
};

export default Todolist;