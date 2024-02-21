import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isDarkPage } from '@util/location';
import { MdEmail, MdMap, MdPhone } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

function Bottom() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    if (isDarkPage(location.pathname)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [location.pathname]);

  return (
    <footer
      className={`flex flex-col-reverse sm:flex-row relative w-full h-fit py-8 px-2 justify-center items-center m-auto ${
        darkMode
          ? 'bg-darkdarkgray text-tsecondary'
          : 'bg-transparent text-secondary'
      }`}
    >
      <div className="flex flex-col pt-8 text-center sm:pr-32 sm:pt-0">
        <h2 className="text-sm font-bold">
          AID (AI Developers) in PNU @ 2022 ALL RIGHTS RESERVED
        </h2>
        <p className="text-xs">
          Reproduction in whole or part without written permission is strictly
          prohibited.
        </p>
      </div>
      <div className="flex flex-col pb-8 font-sans text-xs border-b gap-y-2 sm:pb-0 sm:text-sm sm:mb-0 sm:border-l sm:pl-32 sm:border-b-0">
        <div className="flex items-center gap-x-2">
          <MdPhone className="text-2xl" />
          <p>010-9425-1908</p>
        </div>
        <div className="flex gap-x-2">
          <MdEmail className="text-2xl" />
          <p>
            {t('first_contact')} (bshlab671@naver.com) | {t('second_contact')}{' '}
            (sonbongguk5@gmail.com)
          </p>
        </div>
        <div className="flex gap-x-2">
          <MdMap className="text-2xl" />
          <p>{t('location')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
