import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const LayoutHooks = () => {
  // const [date, setDate] = useState(window.location.href);

  // function changeRoute() {
  //   setDate(window.location.href);
  // }

  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/add">Add book</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>Oksana Kalinina, 2023</footer>
    </>
  );
};
