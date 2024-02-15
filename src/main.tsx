import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { routers } from './router';
import { enableMocking } from '@util/mock';
import axios from 'axios';

enableMocking().then(() => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('No root element found');
  }

  if (!import.meta.env.DEV) {
    axios.defaults.baseURL = 'http://localhost:8000';
  } else {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  }

  // React 18의 createRoot와 hydrateRoot 사용
  if (rootElement.hasChildNodes()) {
    // 사전 렌더링된 컨텐츠가 있는 경우 hydrateRoot를 사용
    ReactDOM.hydrateRoot(
      rootElement,
      <React.StrictMode>
        <RouterProvider router={routers} />
      </React.StrictMode>
    );
  } else {
    // 클라이언트 사이드 렌더링을 위해 createRoot 사용
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <RouterProvider router={routers} />
      </React.StrictMode>
    );
  }
});
