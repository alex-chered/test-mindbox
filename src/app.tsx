/* eslint-disable react/jsx-no-constructed-context-values */

import { useReducer } from 'react';

// store
import {
  AppContext,
  appReducer,
  initialState
} from 'store';

// components
import { Main } from 'components';

// ============================== APP ============================== //

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // RENDER
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Main />
    </AppContext.Provider>
  );
};
