import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isDarkPage } from '@util/location';
import { MdEmail, MdMap, MdPhone } from 'react-icons/md';

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
      className={`flex relative w-full h-fit py-8 justify-center items-center m-auto ${
        darkMode
          ? 'bg-darkdarkgray text-tsecondary'
          : 'bg-transparent text-secondary'
      }`}
    >
      <div className="flex flex-col pr-32 text-center">
        <h2 className="text-sm font-bold">
          AID (AI Developers) in PNU @ 2022 ALL RIGHTS RESERVED
        </h2>
        <p className="text-xs">
          Reproduction in whole or part without written permission is strictly
          prohibited.
        </p>
      </div>
      <div className="pl-32 font-sans border-l">
        <div className="flex items-center gap-x-2">
          <MdPhone className="text-2xl" />
          <p className="text-xs">010-9425-1908</p>
        </div>
        <div className="flex items-center gap-x-2">
          <MdEmail className="text-2xl" />
          <p className="text-xs">
            회장 박시형 (bshlab671@naver.com) | 부회장 손봉국
            (sonbongguk5@gmail.com)
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <MdMap className="text-2xl" />
          <p className="text-xs">
            부산광역시 금정구 부산대학로63번길 2(장전동), 부산대학교
            제6공학관(컴퓨터공학관)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
