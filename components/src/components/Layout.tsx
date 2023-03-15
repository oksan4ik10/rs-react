import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer>Oksana Kalinina, 2023</footer>
    </>
  );
};
