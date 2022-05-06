import { Todo } from '../models/Todo';

export function TodoStateReducer(state: Todo[] | [], action: any) {
  let LOCAL_STATE: Todo[] = JSON.parse(localStorage.getItem('todos')!) || [];

  let updateLocalStorage = true;

  switch (action.type) {
    case 'ADD':
      LOCAL_STATE = [...state, action.payload];
      break;
    case 'REMOVE':
      if (LOCAL_STATE.length) {
        LOCAL_STATE = LOCAL_STATE.filter((item) => item.id !== action.payload);
      } else {
        LOCAL_STATE = state.filter((item) => item.id !== action.payload);
      }
      break;
    case 'TOGGLE_COMPLETE':
      LOCAL_STATE = LOCAL_STATE.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
      break;
    case 'SEARCH_TODO':
      updateLocalStorage = false;
      if (action.payload) {
        LOCAL_STATE = LOCAL_STATE.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
      break;
    case 'REFRESH':
      if (!LOCAL_STATE.length) {
        LOCAL_STATE = JSON.parse(localStorage.getItem('todos')!) || [];
      }
      break;
    case 'COMPLETED_TODOS':
      updateLocalStorage = false;
      LOCAL_STATE = LOCAL_STATE.filter((item) => item.completed);
      break;
    default:
      return state;
  }

  if (updateLocalStorage) {
    localStorage.setItem('todos', JSON.stringify(LOCAL_STATE));
  }

  return LOCAL_STATE;
}
