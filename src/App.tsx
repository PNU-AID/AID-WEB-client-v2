import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import GeneralLayout from './pages/GeneralLayout';
import Header from '@component/common/Header';
import Bottom from '@component/common/Bottom';
import AidQeuryClient from '@store/AidQeuryClient';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AidQeuryClient>
      <GeneralLayout>
        <Header />
        <main>
          <Outlet />
        </main>
        <Bottom />
      </GeneralLayout>
    </AidQeuryClient>
  );
}

export default App;
