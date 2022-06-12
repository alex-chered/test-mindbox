import { useCallback, useContext } from 'react';

// store
import { AppContext } from 'store';

// models
import { TodoModel } from 'models';

// ============================== USE APP STATE ============================== //

export const useAppState = () => {
  const { state: { todos, currentTasks } } = useContext(AppContext);

  // Function returns the active tasks count
  const getActiveLength = (): number => {
    return todos.filter((item) => !item.completed).length;
  };

  // Function returns tasks, depending on "currentTasks"
  const getTodos = useCallback((): TodoModel[] => {
    switch (currentTasks) {
      case 'active':
        return todos.filter((item) => !item.completed);
      case 'completed':
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  }, [currentTasks, todos]);

  // RETURN
  return {
    todos,
    currentTasks,
    getTodos,
    getActiveLength
  };
};
