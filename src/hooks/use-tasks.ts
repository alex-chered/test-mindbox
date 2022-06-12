import { useContext } from 'react';

// 3-rd party
import { v4 as uuid } from 'uuid';

// store
import {
  AppContext,
  addTodo,
  setCompleted,
  clearCompletedTodos,
  setCurrentTasks as setCurrentTasksAction,
  TActiveType
} from 'store';

// models
import { TodoModel } from 'models';

// ============================== USE TASKS ============================== //

export const useTasks = () => {
  const { dispatch } = useContext(AppContext);

  // ADD TASK
  const addTask = (text: string) => {
    const newTodo: TodoModel = {
      id: uuid(),
      name: text,
      completed: false
    };
    dispatch(addTodo(newTodo));
  };

  // SET TASK COMPLETED
  const setTaskCompleted = (id: string, completed: boolean) => {
    dispatch(setCompleted(id, completed));
  };

  // CLEAR COMPLETED TASKS
  const clearCompletedTasks = () => {
    dispatch(clearCompletedTodos());
  };

  // SET CURRENT
  const setCurrentTasks = (data: TActiveType) => {
    dispatch(setCurrentTasksAction(data));
  };

  // RETURN
  return {
    addTask,
    setTaskCompleted,
    clearCompletedTasks,
    setCurrentTasks
  };
};
