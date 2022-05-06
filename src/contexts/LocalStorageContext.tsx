import React, { createContext, useReducer } from 'react';
import { Todo } from '../models/Todo';
import { TodoStateReducer } from '../utilities/TodoStateReducer';

export const LocalStorageContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const LocalStorageContextProvider = ({ children }: Props) => {
  const localData: Todo[] = JSON.parse(localStorage.getItem('todos')!) || [];

  const [state, dispatch] = useReducer(TodoStateReducer, localData);

  return (
    <LocalStorageContext.Provider value={{ state, dispatch }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
