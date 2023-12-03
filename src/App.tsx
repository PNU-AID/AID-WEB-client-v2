import { Outlet } from 'react-router-dom';
import GeneralLayout from './pages/GeneralLayout';

function App() {
  return (
    <GeneralLayout>
      <Outlet />
    </GeneralLayout>
  );
}

export default App;
