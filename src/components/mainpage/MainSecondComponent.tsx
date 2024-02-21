import { getRecruitInfo } from '@api/recruit';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

interface MainSecondComponentProps {
  activeSection: number;
}

function MainSecondComponent({ activeSection }: MainSecondComponentProps) {
  const { t } = useTranslation();
  const index = 1;

  const { data: recruitInfo } = useQuery({
    queryKey: 'recruitInfo',
    queryFn: getRecruitInfo,
  });

  return (
    <section className="flex items-center justify-center w-full h-screen overflow-hidden font-bold text-center bg-white">
      <motion.div
        animate={{
          scale: activeSection === index ? 1.3 : 1,
          opacity: activeSection === index ? 1 : 0,
        }}
        className="flex flex-col items-center justify-center w-full gap-10 scroll-section"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <>
          <span className="text-4xl sm:text-7xl">AI Developer</span>
          <div className="w-1/3 h-1 bg-secondary" />
          {!recruitInfo?.title.includes('아닙니다') && (
            <h2 className="text-xl text-center">
              {recruitInfo?.title || '미정'}
            </h2>
          )}
          {!recruitInfo?.title.includes('아닙니다') ? (
            <div className="flex flex-col items-center w-2/3 text-sm sm:w-1/3 sm:text-lg font-pretendard">
              <div className="flex w-full">
                <label>{t('number_of_recruits')}: </label>
                <span className="ml-auto">
                  {recruitInfo?.num_of_people_recruited || '미정'}
                </span>
              </div>
              <div className="flex w-full">
                <label>{t('subject_to_recruitment')}: </label>
                <span className="ml-auto">
                  {recruitInfo?.recruitment_target || '미정'}
                </span>
              </div>
              <div className="flex w-full">
                <label>{t('support_link')}: </label>
                <a
                  className="ml-auto text-blue-500 underline cursor-pointer"
                  href={recruitInfo?.recruitment_link || '미정'}
                  target="_blank"
                >
                  {recruitInfo?.recruitment_link || '미정'}
                </a>
              </div>
              <div className="flex w-full">
                <label>{t('interview_period')}: </label>
                <span className="ml-auto">
                  {recruitInfo?.interview_schedule || '미정'}
                </span>
              </div>
              <div className="flex w-full">
                <label>{t('announcement_date')}: </label>
                <span className="ml-auto">
                  {recruitInfo?.announcement_schedule || '미정'}
                </span>
              </div>
            </div>
          ) : (
            <span className="text-2xl sm:text-4xl">{t('not_recruitment')}</span>
          )}
        </>
      </motion.div>
    </section>
  );
}

export default MainSecondComponent;
