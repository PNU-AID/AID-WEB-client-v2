import { getRecruitInfo } from '@api/recruit';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';

interface MainSecondComponentProps {
  activeSection: number;
}

function MainSecondComponent({ activeSection }: MainSecondComponentProps) {
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
        className="flex flex-col items-center justify-center w-full gap-12 scroll-section"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {recruitInfo ? (
          <>
            <span className="text-5xl">{recruitInfo.title}</span>
            <div className="w-1/3 h-1 bg-secondary" />
            {recruitInfo.title !== '지원 기간이 아닙니다' ? (
              <div className="flex flex-col items-center w-1/3 text-lg">
                <div className="flex w-full">
                  <label>모집기간: </label>
                  <span className="ml-auto">
                    {recruitInfo.recruitment_schedule || '미정'}
                  </span>
                </div>
                <div className="flex w-full">
                  <label>모집인원: </label>
                  <span className="ml-auto">
                    {recruitInfo.num_of_people_recruited || '미정'}
                  </span>
                </div>
                <div className="flex w-full">
                  <label>모집대상: </label>
                  <span className="ml-auto">
                    {recruitInfo.recruitment_target || '미정'}
                  </span>
                </div>
                <div className="flex w-full">
                  <label>지원링크: </label>
                  <a
                    className="ml-auto text-blue-500 underline cursor-pointer"
                    href={recruitInfo.recruitment_link || '미정'}
                    target="_blank"
                  >
                    {recruitInfo.recruitment_link || '미정'}
                  </a>
                </div>
                <div className="flex w-full">
                  <label>면접기간: </label>
                  <span className="ml-auto">
                    {recruitInfo.interview_schedule || '미정'}
                  </span>
                </div>
                <div className="flex w-full">
                  <label>합격자 발표 일정: </label>
                  <span className="ml-auto">
                    {recruitInfo.announcement_schedule || '미정'}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-7xl">AID</span>
            )}
          </>
        ) : (
          <>
            <span className="text-5xl">부산대학교 인공지능 동아리</span>
            <div className="w-1/3 h-1 bg-secondary" />
            <span className="text-7xl">AID</span>
          </>
        )}
      </motion.div>
    </section>
  );
}

export default MainSecondComponent;
