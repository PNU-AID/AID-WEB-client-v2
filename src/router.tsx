import App from './App';
import { createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import StudyPage from './pages/StudyPage';
import type { RouteItem } from 'router';
import ErrorPage from './pages/ErrorPage';

const routerData: RouteItem[] = [
  {
    id: 1,
    path: 'study',
    label: 'Study',
    withAuth: false,
    element: <StudyPage />,
  },
];

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
