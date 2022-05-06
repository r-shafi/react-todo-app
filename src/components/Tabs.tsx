import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useLocalStorageContext } from '../hooks/useLocalStorageContext';
import CreateTodo from './CreateTodo';
import SearchTodo from './SearchTodo';

const Links = [
  {
    path: '/',
    label: 'Create New Todo',
  },
  {
    path: '/search',
    label: 'Search Todos',
  },
  {
    path: '/completed',
    label: 'Completed Todos',
  },
];

export default function Tabs() {
  const { dispatch } = useLocalStorageContext();

  return (
    <BrowserRouter>
      <nav className="grid grid-cols-3 gap-2 text-center">
        {Links.map(({ path, label }) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              'bg-slate-50 py-2 rounded hover:bg-slate-100 ' +
              (isActive ? 'font-bold bg-slate-200' : '')
            }
            key={label}
            onClick={() =>
              dispatch({
                type: label.includes('Completed')
                  ? 'COMPLETED_TODOS'
                  : 'REFRESH',
              })
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<CreateTodo />} />
        <Route path="search" element={<SearchTodo />} />
        <Route path="completed" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
