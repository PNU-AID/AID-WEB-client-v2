import { ProjectItemList } from '@data/study-data';
import Posts from '../components/studypage/Posts';
import { useQuery } from 'react-query';
import { getStudyList } from '@api/study';
import { StudyItem } from '@type/study';

function StudyPage() {
  const { data: studyList } = useQuery<StudyItem[] | undefined>({
    queryKey: 'studyList',
    queryFn: getStudyList,
  });
  const study = studyList || [];

  return (
    <section className="relative flex flex-col max-w-screen-xl gap-8 px-4 mx-auto mb-8 py-[20vh]">
      <Posts projectList={ProjectItemList} studyList={study} />
    </section>
  );
}

export default StudyPage;
