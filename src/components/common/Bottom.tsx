import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isDarkPage } from '../../utils/location';

function Bottom() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (isDarkPage(location.pathname)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [location.pathname]);

  return (
    <footer
      className={`flex flex-col w-full h-[80vh] px-28 py-16  ${
        darkMode
          ? 'bg-darkdarkgray text-tsecondary'
          : 'bg-transparent text-secondary'
      }`}
    >
      <div className="text-xl font-bold">AID (AI Developers)</div>
      <br />
      <div className="text-md">부산대학교 정보컴퓨터공학부</div>
      <div className="text-md">회장 박시형 (asdf1234@gmail.com)</div>
      <div className="text-md">홍길동 부회장 (qwer0987@gmail.com)</div>
      <div className="flex w-full h-full">
        <figure className="flex items-center justify-center flex-1 m-12 bg-gray-500">
          회장님 프사
        </figure>
        <figure className="flex items-center justify-center flex-1 m-12 bg-gray-500">
          회장님 개요
        </figure>
      </div>
    </footer>
  );
}

export default Bottom;
