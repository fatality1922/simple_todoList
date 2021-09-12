import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import './App.scss';
import { TaskList } from './TaskList/TaskList';


const tasksInitial: Array<task> = [ //mock
  { id: 0, text: "Make delicious pasta", complete: true },
  { id: 1, text: "Do whole job", complete: false },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(tasksInitial);
  const [taskId, setTaskId] = useState(tasksInitial.length);

  const switchTask: switchTask = selectedTask => { //switchTask type defined in types.d
    const newTasks = tasks.map(task => { //creating new const with changed status of complete
      if (task === selectedTask) return { ...task, complete: !task.complete }  //change the status of task
      return task;
    });
    setTasks(newTasks); //set new status using newTasks const
  }

  const handleDelete: handleDelete = (deleteId) => {
    const newTasks = tasks.filter(task => {
      return task.id !== deleteId;
    })
    setTasks(newTasks);
  }

  const completedTasks = tasks.filter(task => { //filter all tasks by status of complete
    if (task.complete === true) return task;
    return null;
  });
  console.log(completedTasks); //show completed tasks //why does it works


  const addTask: AddTask = newTask => { //string, not object just because complete is added "rigidly"
    newTask.trim() !== "" &&
      setTasks([...tasks, { id: taskId, text: newTask, complete: false }]);
    setTaskId(taskId + 1);
  }

  return (
    <Container maxWidth="sm" className="container">
      <TaskList tasks={tasks} switchTask={switchTask} handleDelete={handleDelete} addTask={addTask} />
    </Container>
  )
}

export default App;
