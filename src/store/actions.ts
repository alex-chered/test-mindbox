// models
import { TodoModel } from 'models';

// store
import { TActiveType } from './state';

export enum ActionType {
  AddTodo,
  SetCompleted,
  ClearCompletedTodos,
  SetCurrentTasks
}

// ============================== ACTION INTERFACES ============================== //

interface IBaseAction {
  type: ActionType;
}

export interface IAddTodoAction extends IBaseAction {
  payload: TodoModel;
}

export interface ISetCompletedAction extends IBaseAction {
  payload: { id: string; completed: boolean; };
}

export interface ISetCurrentTasksAction extends IBaseAction {
  payload: TActiveType;
}

export type AppActions = IBaseAction | IAddTodoAction | ISetCompletedAction;

// ============================== ACTION CERATORS ============================== //

export const addTodo = (todo: TodoModel): IAddTodoAction => ({
  type: ActionType.AddTodo,
  payload: todo
});

export const clearCompletedTodos = (): IBaseAction => ({
  type: ActionType.ClearCompletedTodos
});

export const setCompleted = (id: string, completed: boolean): ISetCompletedAction => ({
  type: ActionType.SetCompleted,
  payload: { id, completed }
});

export const setCurrentTasks = (data: TActiveType) => ({
  type: ActionType.SetCurrentTasks,
  payload: data
});
