import { Link } from 'react-router-dom';
import { routerData } from '../../router';
import { motion, useScroll } from 'framer-motion';
import { Button } from './Button/Button';

function Header() {
  const { scrollYProgress } = useScroll();
  const headerData = routerData.filter(
    (item) => item.label !== 'Login' && item.label !== 'Register'
  );

  return (
    <>
      <header className="fixed z-10 w-full h-16 bg-white">
        <div className="flex items-center w-full h-full p-7">
          <h3 className="flex justify-start flex-1">AI Developers</h3>
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
          className="absolute bottom-0 w-full h-0.5 bg-black"
          style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
        />
      </header>
    </>
  );
}

export default Header;
