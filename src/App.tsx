import { Outlet } from 'react-router-dom';
import GeneralLayout from './pages/GeneralLayout';
import Header from './components/common/Header';
import Bottom from './components/common/Bottom';

function App() {
  return (
    <GeneralLayout>
      <Header />
      <Outlet />
      <Bottom />
    </GeneralLayout>
  );
}

export default App;
