import React, { createContext, useReducer } from 'react';

export const LocalStorageContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    default:
      return state;
  }
}

export const LocalStorageContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <LocalStorageContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </LocalStorageContext.Provider>
  );
};
