import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, lazy, Suspense } from 'react';
import AdoptedPetContext from './AdoptedPetContext';
import './App.css';

import { Mainpage } from './pages/Mainpage';
import { About } from './pages/About';
import { Notfound } from './pages/404';
import { AddBook } from './pages/AddBook';

import { LayoutHooks } from './components/LayoutHooks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});

function App() {
  const adoptedPet = useState(null);
  return (
    <div className="App">
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🌀</h2>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<LayoutHooks />}>
                <Route index element={<Mainpage />} />
                <Route path="about" element={<About />} />
                <Route path="add" element={<AddBook />} />
                <Route path="*" element={<Notfound />} />
              </Route>
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </div>
  );
}

export default App;
