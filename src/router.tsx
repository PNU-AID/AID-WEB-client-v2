import App from './App';
import { createBrowserRouter } from 'react-router-dom';

import type { RouteItem } from 'router';
import MainPage from '@page/MainPage';
import StudyPage from '@page/StudyPage';
import QnaPage from '@page/QnaPage';
import NewsPage from '@page/NewsPage';
import AboutPage from '@page/AboutPage';
import ApplyPage from '@page/ApplyPage';
import ErrorPage from '@page/ErrorPage';
import LoginPage from '@page/LoginPage';
import RegisterPage from '@page/RegisterPage';
import FaqPage from '@page/FaqPage';

export const routerData: RouteItem[] = [
  {
    path: '',
    label: 'Main',
    withAuth: false,
    element: <MainPage />,
  },
  {
    path: 'study',
    label: 'Study',
    withAuth: false,
    element: <StudyPage />,
  },
  {
    path: 'faq',
    label: 'FAQ',
    withAuth: false,
    element: <FaqPage />,
  },
  {
    path: 'qna',
    label: 'Q&A',
    withAuth: false,
    element: <QnaPage />,
  },
  {
    path: 'news',
    label: 'News',
    withAuth: false,
    element: <NewsPage />,
  },
  {
    path: 'about',
    label: 'About',
    withAuth: false,
    element: <AboutPage />,
    hidden: true,
  },
  {
    path: 'apply',
    label: 'Apply',
    withAuth: false,
    element: <ApplyPage />,
    hidden: true,
  },
  {
    path: 'login',
    label: 'Login',
    withAuth: false,
    element: <LoginPage />,
  },
  {
    path: 'signup',
    label: 'Signup',
    withAuth: false,
    element: <RegisterPage />,
    hidden: true,
  },
];

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      ...routerData.map((item) => {
        if (item.path === '') {
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
