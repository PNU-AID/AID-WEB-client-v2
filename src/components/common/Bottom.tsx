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
      className={`flex flex-col w-full h-fit py-20 justify-center ${
        darkMode
          ? 'bg-darkdarkgray text-tsecondary'
          : 'bg-transparent text-secondary'
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-x-20">
        <h2 className="text-sm font-bold">
          AID (AI Developers) in PNU @ 2022 ALL RIGHTS RESERVED
        </h2>
        <div className="text-xs">
          Reproduction in whole or part without written permission is strictly
          prohibited.
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
