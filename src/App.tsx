import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import 'react-loading-skeleton/dist/skeleton.css';

import GeneralLayout from '@page/GeneralLayout';
import Header from '@component/common/Header';
import Bottom from '@component/common/Bottom';
import AidQeuryClient from '@store/AidQeuryClient';
import AuthContextProvider from '@store/AuthContext';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AidQeuryClient>
      <AuthContextProvider>
        <GeneralLayout>
          <Header />
          <main>
            <Outlet />
          </main>
          <Bottom />
        </GeneralLayout>
      </AuthContextProvider>
    </AidQeuryClient>
  );
}

export default App;
