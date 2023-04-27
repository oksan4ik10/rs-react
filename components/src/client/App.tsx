// import { Routes, Route } from 'react-router-dom';
// import './App.css';

// import { Mainpage } from '../pages/Mainpage';
// import { About } from '../pages/About';
// import { Notfound } from '../pages/404';
// import { AddBook } from '../pages/AddBook';

// import { LayoutHooks } from '../components/LayoutHooks';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<LayoutHooks />}>
//           <Route index element={<Mainpage />} />
//           <Route path="about" element={<About />} />
//           <Route path="add" element={<AddBook />} />
//           <Route path="*" element={<Notfound />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes/AppRoutes';
import { setupStore, RootState } from './redux/store/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
