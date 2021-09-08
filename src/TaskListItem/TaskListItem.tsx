import { Button, Checkbox, Grid, ListItem, ListItemIcon } from '@material-ui/core';
import React from 'react'
import './TaskListItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);


interface TaskListItemProps {
  task: task;
  switchTask: switchTask;
  handleDelete: handleDelete;
  addTask: AddTask;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task, switchTask, handleDelete }) => {
  const classes = useStyles();
  return (
    <ListItem alignItems="center" className={task.complete ? "complete" : "uncomplete"}>

      <ListItemIcon>
        <Checkbox
          color="primary"
          checked={task.complete}
          onChange={() => switchTask(task)}
        />
      </ListItemIcon>

      <Grid container>
        <Typography className={task.complete ? "complete" : "uncomplete"}>
          {task.text}
        </Typography>
      </Grid>

      <Grid container justify="flex-end">
        <Button
          variant="contained"
          style={{ backgroundColor: '#de0404', color: '#FFFFFF' }}
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </Button>
      </Grid>

    </ListItem >
  );
}