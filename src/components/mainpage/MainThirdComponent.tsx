import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface MainThirdComponentProps {
  activeSection: number;
}

export default function MainThirdComponent({
  activeSection,
}: MainThirdComponentProps) {
  const { t } = useTranslation();
  const index = 2;
  return (
    <section className="flex items-center justify-center w-full min-h-screen overflow-hidden bg-white">
      <motion.div
        animate={{
          scale: activeSection === index ? 1.3 : 1,
          opacity: activeSection === index ? 1 : 0,
        }}
        className="scroll-section"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 m-auto text-center">
          <h1 className="mb-8 text-4xl text-primary">About Us</h1>
          <hr className="w-20 h-1 mb-12 bg-black" />
          <p className="w-2/3 text-xs leading-6 sm:w-[1000px] sm:max-w-[1200px] font-tae sm:px-0">
            {t('main_first_description')}
            <br />
            <br className="block sm:hidden" />
            {t('main_second_description')}
            <br />
            <br className="block sm:hidden" />
            {t('main_third_description')}
            <br />
            <br className="block sm:hidden text-wrap" />
            {t('main_fourth_description')}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
