import { Link, useLocation } from 'react-router-dom';
import { routerData } from '../../router';
import { colors } from './Color';
import { motion, useScroll } from 'framer-motion';

function Header() {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const headerData = routerData.filter(
    (item) => item.label !== 'Login' && item.label !== 'Register'
  );

  return (
    <>
      <header className="fixed z-10 w-full h-20 bg-white">
        <div className="flex w-full h-full p-7">
          <h3 className="flex justify-start flex-1">AI Developers</h3>
          <div className="flex grow justify-evenly">
            {headerData.map((item) => (
              <div className="" key={item.label}>
                <Link
                  style={{
                    color:
                      location.pathname === '/' + item.path
                        ? colors.primary
                        : 'inherit',
                  }}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-end flex-1 gap-4 w-1/8">
            <button>Login</button> |<button>Register</button>
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 w-full h-1 bg-black"
          style={{ scaleX: scrollYProgress }}
        />
      </header>
    </>
  );
}

export default Header;
