/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

// store
import { AppState } from './state';
import {
  AppActions,
  ActionType,
  ISetCompletedAction,
  IAddTodoAction,
  ISetCurrentTasksAction
} from './actions';

// ============================== REDUCER ============================== //

export const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    // ADD TODO
    case ActionType.AddTodo:
      const todo = (action as IAddTodoAction).payload;

      return {
        ...state,
        todos: [
          ...state.todos,
          todo
        ]
      };

    // CLEAR TODOS
    case ActionType.ClearCompletedTodos:
      return {
        ...state,
        todos: [
          ...state.todos.filter((item) => !item.completed)
        ]
      };

    // SET COMPLETED
    case ActionType.SetCompleted:
      const data = (action as ISetCompletedAction).payload;

      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id === data.id) {
              item.completed = data.completed;
            }
            return item;
          })
        ]
      };

    // SET CURRENT TASKS
    case ActionType.SetCurrentTasks:
      const current = (action as ISetCurrentTasksAction).payload;

      return {
        ...state,
        currentTasks: current
      };

    // DEFAULT
    default:
      return state;
  }
};
