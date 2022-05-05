import React, { createContext, useReducer } from 'react';
import { Todo } from '../models/Todo';

export const LocalStorageContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

function reducer(state: Todo[] | [], action: any) {
  let NEW_STATE: Todo[] = [];

  switch (action.type) {
    case 'ADD':
      NEW_STATE = [...state, action.payload];
      break;
    case 'REMOVE':
      NEW_STATE = state.filter((item) => item.id !== action.payload);
      break;
    case 'TOGGLE_COMPLETE':
      NEW_STATE = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      break;
    default:
      return state;
  }

  localStorage.setItem('todos', JSON.stringify(NEW_STATE));
  return NEW_STATE;
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
