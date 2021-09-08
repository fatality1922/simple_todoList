type task = {
    id: number,
    text: string,
    complete: boolean
  }
  
  type switchTask = (selectedTask: task) => void;

  type AddTask = (newTask: string) => void;

  type handleDelete = (targetId: number) => void;

  //that file defines all the types, not importing that because of .d in the name of the file