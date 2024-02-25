import { getRecruitInfo } from '@api/recruit';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

interface MainSecondComponentProps {
  activeSection: number;
}

function MainSecondComponent({ activeSection }: MainSecondComponentProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
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
          {(!recruitInfo?.ko.title.includes('아닙니다') ||
            !recruitInfo?.en.title.includes('not')) && (
            <h2 className="text-xl text-center font-pretendard">
              {currentLanguage === 'ko'
                ? recruitInfo?.ko.title
                : recruitInfo?.en.title || '미정'}
            </h2>
          )}
          {!recruitInfo?.ko.title.includes('아닙니다') ||
          !recruitInfo?.en.title.includes('not') ? (
            <div className="flex flex-col items-center w-2/3 p-4 font-sans text-xs sm:w-1/3 text-nowrap bg-slate-100">
              <div className="flex w-full">
                <label>{t('recruitment_schedule')}: </label>
                <a
                  className="ml-auto"
                  href={
                    currentLanguage === 'ko'
                      ? recruitInfo?.ko.recruitment_schedule
                      : recruitInfo?.en.recruitment_schedule || '미정'
                  }
                  target="_blank"
                >
                  {currentLanguage === 'ko'
                    ? recruitInfo?.ko.recruitment_schedule
                    : recruitInfo?.en.recruitment_schedule || '미정'}
                </a>
              </div>
              <div className="flex w-full">
                <label>{t('subject_to_recruitment')}: </label>
                <span className="ml-auto max-w-[200px] text-wrap text-end">
                  {currentLanguage === 'ko'
                    ? recruitInfo?.ko.recruitment_target
                    : recruitInfo?.en.recruitment_target || '미정'}
                </span>
              </div>
              <div className="flex w-full text-wrap">
                <label>{t('number_of_recruits')}: </label>
                <span className="ml-auto">
                  {currentLanguage === 'ko'
                    ? recruitInfo?.ko.num_of_people_recruited
                    : recruitInfo?.en.num_of_people_recruited || '미정'}
                </span>
              </div>
              <div className="flex w-full">
                <label>{t('support_link')}: </label>
                <a
                  className="ml-auto text-blue-500 underline cursor-pointer"
                  href={
                    currentLanguage === 'ko'
                      ? recruitInfo?.ko.recruitment_link
                      : recruitInfo?.en.recruitment_link || '미정'
                  }
                  target="_blank"
                >
                  {currentLanguage === 'ko'
                    ? recruitInfo?.ko.recruitment_link
                    : recruitInfo?.en.recruitment_link || '미정'}
                </a>
              </div>
              <div className="flex w-full">
                <label>{t('announcement_schedule')}: </label>
                <span className="ml-auto">
                  {currentLanguage === 'ko'
                    ? recruitInfo?.ko.announcement_schedule
                    : recruitInfo?.en.announcement_schedule || '미정'}
                </span>
              </div>
              <div className="flex w-full">
                <label>{t('OT_schedule')}: </label>
                <span className="ml-auto">
                  {currentLanguage === 'ko'
                    ? recruitInfo?.ko.OT_schedule
                    : recruitInfo?.en.OT_schedule || '미정'}
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
