import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../button/Button';
import { routerData } from '../../router';
import { isDarkPage, isNotHeader } from '@util/location';
import MenuIconSvg from '@asset/menu-icon.svg?react';
import AidLogoImg from '@asset/aid-logo.png';
import { useAuthCtx } from '@store/AuthContext';
import HeaderProfile from './HeaderProfile';

function Header() {
  const { authState } = useAuthCtx();
  const location = useLocation();
  const headerData = routerData.filter(
    (item) => isNotHeader(item.path) && !item.hidden
  );

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      setIsExpanded(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  let textCss = 'text-black';
  useEffect(() => {
    setIsExpanded(false);
    if (isDarkPage(location.pathname)) {
      textCss = 'text-white';
    }
  }, [location]);

  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const toggleProfile = () => {
    setIsProfileExpanded(!isProfileExpanded);
  };
  // TODO: 라우팅마다 로그인 유저 조회해서 검증해야함.
  return (
    <header
      className={[
        'fixed flex items-center w-full grow z-[99999] justify-between sm:justify-evenly',
        'transition-all duration-300 h-[60px]',
        lastScrollY > 0 || isExpanded ? 'bg-white' : 'bg-transparent',
        isVisible ? '' : '-translate-y-full',
      ].join(' ')}
    >
      <div className="flex items-center justify-around w-full ">
        <Link className="relative" to="/">
          <img
            alt="aid-logo"
            className="absolute top-0 bottom-0 m-auto"
            src={AidLogoImg}
            width={20}
          />
          <h3
            className={[
              'flex justify-start ml-8 text-2xl font-bold',
              'transition-all duration-300',
              !isDarkPage(location.pathname)
                ? 'text-black'
                : lastScrollY > 0 || isExpanded
                  ? textCss
                  : 'text-black',
            ].join(' ')}
            id="aid-logo"
          >
            AI Developer
          </h3>
        </Link>
        <MenuIconSvg
          className="sm:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
          width={70}
        />
        <nav
          className={[
            'flex flex-col absolute top-[60px] gap-0 sm:mb-4 w-full shadow-xl overflow-hidden font-sans',
            'sm:justify-end sm:w-fit sm:gap-0 sm:pt-2 sm:flex-row sm:shadow-none sm:static sm:mx-8 sm:my-2',
            'transition-all duration-300',
            isExpanded
              ? 'max-h-[500px] bg-white'
              : 'max-h-0 bg-transparent sm:max-h-[300px]',
          ].join(' ')}
        >
          {headerData.map((item) => {
            if (item.label === 'Login') {
              if (authState.isAuthenticated) {
                return (
                  <div className="relative">
                    <button
                      className="px-4 py-3 rounded-lg hover:bg-gray-100"
                      onClick={toggleProfile}
                    >
                      <span className="text-primary">
                        {authState.authInfo!.nickname}
                      </span>
                      님, 안녕하세요!
                    </button>
                    <HeaderProfile
                      isExpanded={isVisible && isProfileExpanded}
                    />
                  </div>
                );
              } else {
                <Link to="/login">
                  <Button
                    className={[
                      location.pathname.slice(1) === 'login' ? 'font-bold' : '',
                      !isDarkPage(location.pathname)
                        ? 'text-black'
                        : lastScrollY > 0 || isExpanded
                          ? textCss
                          : 'text-black',
                    ].join(' ')}
                    label="Login"
                    size="large"
                  />
                </Link>;
              }
            }
            return (
              <Link key={item.label} to={item.path}>
                <Button
                  className={[
                    location.pathname.slice(1) === item.path ? 'font-bold' : '',
                    !isDarkPage(location.pathname)
                      ? 'text-black'
                      : lastScrollY > 0 || isExpanded
                        ? textCss
                        : 'text-black',
                  ].join(' ')}
                  label={item.label}
                  size="large"
                />
              </Link>
            );
          })}
          <a href={import.meta.env.VITE_AID_NOTION_NEWS_URL} target="_blank">
            <Button
              className={[
                !isDarkPage(location.pathname)
                  ? 'text-black'
                  : lastScrollY > 0 || isExpanded
                    ? textCss
                    : 'text-black',
              ].join(' ')}
              label="지원하기"
              size="large"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
