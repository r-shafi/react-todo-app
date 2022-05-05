import { useContext } from 'react';
import { LocalStorageContext } from '../contexts/LocalStorageContext';
import { Todo } from '../models/Todo';

interface Context {
  state: Todo[];
  dispatch: React.Dispatch<any>;
}

export function useLocalStorageContext() {
  const context: Context = useContext(LocalStorageContext);

  if (context === undefined) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider'
    );
  }

  return context;
}
