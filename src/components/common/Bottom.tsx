import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isDarkPage } from '@util/location';

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
      className={`flex flex-col w-full h-fit py-8 justify-center items-center m-auto ${
        darkMode
          ? 'bg-darkdarkgray text-tsecondary'
          : 'bg-transparent text-secondary'
      }`}
    >
      <p>회장 박시형 (asdf@naver.com) / 부회장 손봉국 (qwer@gmail.com)</p>
      <br />
      <h2 className="text-sm font-bold">
        AID (AI Developers) in PNU @ 2022 ALL RIGHTS RESERVED
      </h2>
      <p className="text-xs">
        Reproduction in whole or part without written permission is strictly
        prohibited.
      </p>
    </footer>
  );
}

export default Bottom;
