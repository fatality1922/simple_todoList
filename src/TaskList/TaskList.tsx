import { List, Typography } from '@material-ui/core';
import React from 'react'
import { AddTaskForm } from '../AddTaskForm/AddTaskForm';
import { TaskListItem } from '../TaskListItem/TaskListItem';
import './TaskList.css';


interface TaskListItemProps {
    tasks: Array<task>;     // type task added in types.d, array of that with generic
    switchTask: switchTask; // types added in types.d
    handleDelete: handleDelete;
    addTask: AddTask;
}
export const TaskList: React.FC<TaskListItemProps> = ({ tasks, switchTask, handleDelete, addTask }) => {
    return (
        <List className="list">
            <Typography variant="h3" align="center">
                Tasks List
            </Typography>
            <AddTaskForm className="taskForm" addTask={addTask} />
            {tasks.map(task => {
                if (task.complete === false) return <TaskListItem key={task.id} task={task} switchTask={switchTask} handleDelete={handleDelete} addTask={addTask} />
            })}
            {tasks.map(task => {
                if (task.complete === true) return <TaskListItem key={task.id} task={task} switchTask={switchTask} handleDelete={handleDelete} addTask={addTask} />
            })}

        </List>
    );
}