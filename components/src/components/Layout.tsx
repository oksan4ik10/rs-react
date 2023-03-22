import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MyStateRouteHeader } from '../types/types';
export class Layout extends React.Component {
  state: MyStateRouteHeader;
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      date: window.location.href,
    };
    this.changeRoute = this.changeRoute.bind(this);
  }
  changeRoute() {
    this.setState({ date: window.location.href });
  }
  render() {
    return (
      <>
        <header onClick={this.changeRoute}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <p>{this.state.date}</p>
        </header>
        <main className="container">
          <Outlet />
        </main>
        <footer>Oksana Kalinina, 2023</footer>
      </>
    );
  }
}

// export const Layout = () => {
//   return (
//     <>
//       <header>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//       </header>
//       <main className="container">
//         <Outlet />
//       </main>

//       <footer>Oksana Kalinina, 2023</footer>
//     </>
//   );
// };
