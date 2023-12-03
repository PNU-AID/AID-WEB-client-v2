import MainPage from './pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';
import type { RouteItem } from 'router';
import App from './App';

const routerData: RouteItem[] = [];

const router = [
  {
    path: '/',
    element: <App />,
    children: [
      ...routerData.map((item) => {
        return {
          path: item.path,
          element: item.element,
        };
      }),
      { index: true, element: <MainPage /> },
    ],
  },
];

export const routers = createBrowserRouter(router, {
  basename: `/${import.meta.env.VITE_AID_HOMEPAGE_URL}`,
});
