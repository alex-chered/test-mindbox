// models
import { TodoModel } from 'models';

// ============================== APP STATE ============================== //

export type TActiveType = 'all' | 'active' | 'completed';

export interface AppState {
  todos: TodoModel[];
  currentTasks: TActiveType;
}

// ============================== INITIAL STATE ============================== //

export const initialState: AppState = {
  todos: [
    { id: '1', name: 'Тестовое задание', completed: true },
    { id: '2', name: 'Прекрасный код', completed: true },
    { id: '3', name: 'Покрытие тестами', completed: false }
  ],
  currentTasks: 'all'
};
