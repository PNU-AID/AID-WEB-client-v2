import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';

import Button from '../button/Button';
import { routerData } from '../../router';
import { colors } from './Color';
import { isNotAuthPage, isDarkPage } from '../../utils/location';

function Header() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const headerData = routerData.filter((item) => isNotAuthPage(item.path));

  return (
    <>
      <header className="fixed z-10 w-full h-16 bg-white">
        <div className="flex items-center w-full h-full p-7">
          {/* TODO: 로고 이미지로 대체해야함. */}
          <h3 className="flex justify-start flex-1" id="aid-logo">
            AI Developers
          </h3>
          <div className="flex items-center grow justify-evenly">
            {headerData.map((item) => (
              <div className="" key={item.label}>
                <Link to={item.path}>
                  <Button label={item.label} />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-end flex-1 gap-4 w-1/8">
            <button>Login</button> | <button>Register</button>
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 w-full h-1"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: 'left',
            backgroundColor: isDarkPage(location.pathname)
              ? colors.primary
              : 'black',
          }}
        />
      </header>
    </>
  );
}

export default Header;
