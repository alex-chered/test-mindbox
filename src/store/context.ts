import { createContext } from 'react';

// store
import { AppState, initialState } from './state';
import { AppActions } from './actions';

// ============================== CONTEXT ============================== //

export const AppContext = createContext<{
    state: AppState; dispatch: React.Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
