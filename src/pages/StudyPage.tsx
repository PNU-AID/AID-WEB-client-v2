import Filter from '../components/studypage/Filter';
import Posts from '../components/studypage/Posts';

function StudyPage() {
  return (
    <section className="relative flex flex-col max-w-screen-xl gap-8 px-4 mx-auto mb-8 py-[20vh]">
      <Filter />
      <Posts />
    </section>
  );
}

export default StudyPage;
