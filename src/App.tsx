import { Outlet } from 'react-router-dom';
import GeneralLayout from './pages/GeneralLayout';
import Header from './components/common/Header';

function App() {
  return (
    <GeneralLayout>
      <Header />
      <Outlet />
    </GeneralLayout>
  );
}

export default App;
