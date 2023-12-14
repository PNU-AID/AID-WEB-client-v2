import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Bottom() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === '/apply' || location.pathname === '/login') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={`flex flex-col w-full h-[50vh] px-28 py-16 ${
        darkMode
          ? 'bg-darkdarkgray text-tsecondary'
          : 'bg-transparent text-black'
      }`}
    >
      <div className="text-lg font-bold">AID (AI Developers)</div>
      <br />
      <div className="text-base font-thin">부산대학교 정보컴퓨터공학부</div>
      <div className="font-thin text-md">회장 박시형 (asdf1234@gmail.com)</div>
      <div className="font-thin text-md">
        홍길동 부회장 (qwer0987@gmail.com)
      </div>
    </div>
  );
}

export default Bottom;
