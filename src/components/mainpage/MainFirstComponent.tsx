import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { colors } from '../common/Color';
import AidMainBanner from '/public/aid-main-banner.jpg';
import { motion } from 'framer-motion';

interface MainFirstComponentProps {
  activeSection: number;
}

function MainFirstComponent({ activeSection }: MainFirstComponentProps) {
  const index0 = 0;
  return (
    <section className="relative flex items-center justify-center w-full h-screen text-4xl font-bold leading-[100px] text-center text-white ">
      <div className="relative w-full h-[500px] overflow-hidden items-center flex flex-col">
        <img className="-z-[99999] min-w-screen" src={AidMainBanner} />
        <motion.div
          animate={{
            scale: activeSection === index0 ? 1.5 : 1,
            opacity: activeSection === index0 ? 1 : 0,
          }}
          className="absolute bottom-0 left-0 right-0 flex flex-col m-auto top-40 scroll-section"
          key={index0}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h1 className="text-white text-9xl">AID</h1>
          <p className="mt-10 text-xl">AI Engineering & Research in PNU</p>
        </motion.div>
      </div>
      <motion.div
        animate={{
          scale: activeSection === index0 ? 1.5 : 1,
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
