import App from './App';
import { createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import StudyPage from './pages/StudyPage';
import QnaPage from './pages/QnaPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ApplyPage from './pages/ApplyPage';
import ErrorPage from './pages/ErrorPage';
import type { RouteItem } from 'router';

const routerData: RouteItem[] = [
  {
    id: 0,
    path: '',
    label: 'Home',
    withAuth: false,
    element: <MainPage />,
  },
  {
    id: 1,
    path: 'study',
    label: 'Study',
    withAuth: false,
    element: <StudyPage />,
  },
  {
    id: 2,
    path: 'qna',
    label: 'QnA',
    withAuth: false,
    element: <QnaPage />,
  },
  {
    id: 3,
    path: 'news',
    label: 'News',
    withAuth: false,
    element: <NewsPage />,
  },
  {
    id: 4,
    path: 'about',
    label: 'About',
    withAuth: false,
    element: <AboutPage />,
  },
  {
    id: 5,
    path: 'apply',
    label: 'Apply',
    withAuth: false,
    element: <ApplyPage />,
  },
];

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      ...routerData.map((item) => {
        if (item.id == 0) {
          return {
            index: true,
            element: <MainPage />,
          };
        }
        return {
          path: item.path,
          element: item.element,
        };
      }),
    ],
  },
];

export const routers = createBrowserRouter(router, {
  basename: `/${import.meta.env.VITE_AID_HOMEPAGE_URL}`,
});
