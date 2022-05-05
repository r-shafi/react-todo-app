import React, { createContext, useReducer } from 'react';
import { Todo } from '../models/Todo';

export const LocalStorageContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

function reducer(state: Todo[] | [], action: any) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    default:
      return state;
  }
}

export const LocalStorageContextProvider = ({ children }: Props) => {
  const localData: Todo[] = JSON.parse(localStorage.getItem('todos')!) || [];

  const [state, dispatch] = useReducer(reducer, localData);

  return (
    <LocalStorageContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </LocalStorageContext.Provider>
  );
};
