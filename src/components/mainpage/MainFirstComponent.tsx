import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { colors } from '../common/Color';
import AidMainBanner from '@asset/aid-main-banner.jpg';
import { motion } from 'framer-motion';

interface MainFirstComponentProps {
  activeSection: number;
}

function MainFirstComponent({ activeSection }: MainFirstComponentProps) {
  const index0 = 0;
  return (
    <section className="relative flex items-center justify-center w-full h-screen text-4xl font-bold leading-[100px] text-center text-white">
      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <div className="mt-[60px]">
          <img
            alt="aid-main-banner"
            className="-z-[99999] w-full"
            src={AidMainBanner}
          />
        </div>
        <motion.div
          animate={{
            scale: activeSection === index0 ? 1.3 : 1,
            opacity: activeSection === index0 ? 1 : 0,
          }}
          className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center m-auto scroll-section"
          key={index0}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h1 className="text-5xl text-white sm:text-9xl">AID</h1>
          <p className="hidden mt-10 text-sm sm:block sm:text-xl sm:mt-10">
            AI Engineering & Research in PNU
          </p>
        </motion.div>
      </div>
      <motion.div
        animate={{
          scale: activeSection === index0 ? 1.3 : 1,
          opacity: activeSection === index0 ? 1 : 0,
        }}
        className="absolute animate-bounce bottom-10"
        key={index0}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <MdKeyboardDoubleArrowDown color={colors.secondary} size={50} />
      </motion.div>
    </section>
  );
}

export default MainFirstComponent;
