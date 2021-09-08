import React, { ChangeEvent, FormEvent, useState } from 'react'

import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons';
import './AddTaskForm.css';

interface AddTaskFormProps {
    addTask: AddTask; // type added in types.d
}
export const AddTaskForm: React.FC<AddTaskFormProps & { className: string }> = ({ addTask }) => {

    const [newTask, setNewTask] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (newTask.length <= 30) addTask(newTask); //verify if task is not too long
        else { alert(`Max length of task name is 30 characters, your is ${newTask.length}`) };
        setNewTask(""); //set to empty when added
    }
    return (
        <form className="taskForm">
            <input type="text" value={newTask} onChange={handleChange} placeholder="what todo?" />

            <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: '#12824C', color: '#FFFFFF' }}
                startIcon={<Add />}
                onClick={handleSubmit}
            >
                Add
            </Button>
        </form>
    )
}