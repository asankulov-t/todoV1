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
    addNewTask: (value: string) => void,
    changeStatus: (id: string, isdone: boolean) => void,
    filter:filterTypes
}

const Todolist = (props: PropsType) => {
    //hooks
    let [value, setValue] = useState('');
    let [error, setError] = useState('')
    //local functions
    const addTaskLocalFunc = () => {
        if (value.trim() !== '') {
            props.addNewTask(value)
            setValue('')
        }
        if (value.length == 0) {
            setError('Field is empty')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError('')
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
                <input
                    className={error ? 'error' : ''}
                    value={value}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressEnter}
                    type="text"/>
                <button onClick={addTaskLocalFunc}>+</button>
                {error && <p className={'error-message'}>{error}</p>}
            </div>
            <ul>
                {props.tasks.length !== 0 ?
                    props.tasks.map((task, ind) => {
                        const changeStatusLocal = (id: string, isdone: boolean) => props.changeStatus(id, isdone)
                        const deleteHandler = () => props.removeFunc(task.id);
                        return <li className={task.isdone?'is-done':''} key={ind}><input type='checkbox'
                                                    onClick={(e) => changeStatusLocal(task.id, e.currentTarget.checked)}
                                                    checked={task.isdone}/>
                            <span>{task.title}</span>
                            <button onClick={deleteHandler}>x</button>
                        </li>
                    }) : null
                }

            </ul>
            <div>
                <button className={props.filter=='all'?'active-btn':''} onClick={onFilterAll}>All</button>
                <button className={props.filter=='active'?'active-btn':''} onClick={onFilterActive}>Active</button>
                <button className={props.filter=='completed'?'active-btn':''} onClick={onFilterCompleted}>Complete</button>
            </div>
        </div>
    );
};

export default Todolist;