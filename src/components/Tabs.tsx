import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import CreateTodo from './CreateTodo';

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
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<CreateTodo />} />
        <Route path="search" element={<h1>Search</h1>} />
        <Route path="completed" element={<h1>Completed</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
