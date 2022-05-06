import React, { createContext, useReducer } from 'react';
import { Todo } from '../models/Todo';

export const LocalStorageContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

let NEW_STATE: Todo[] = [];
let TEMP_STATE: Todo[] = [];

function reducer(state: Todo[] | [], action: any) {
  let temp = false;

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
    case 'SEARCH_TODO':
      temp = true;

      if (!NEW_STATE.length) {
        NEW_STATE = JSON.parse(localStorage.getItem('todos')!) || [];
      }

      if (!action.payload) {
        TEMP_STATE = NEW_STATE;
      } else {
        TEMP_STATE = NEW_STATE.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
      break;
    case 'REFRESH':
      temp = false;
      if (!NEW_STATE.length) {
        NEW_STATE = JSON.parse(localStorage.getItem('todos')!) || [];
      }
      break;
    case 'COMPLETED_TODOS':
      temp = true;
      TEMP_STATE = NEW_STATE.filter((item) => item.completed);
      break;
    default:
      return state;
  }

  if (!temp) {
    localStorage.setItem('todos', JSON.stringify(NEW_STATE));
  }

  return temp ? TEMP_STATE : NEW_STATE;
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
