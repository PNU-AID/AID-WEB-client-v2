import { MdArrowBack } from 'react-icons/md';
import { QnaContentItem } from '../../type/qna';
import { useSearchParams } from 'react-router-dom';

interface QnaSectionProps {
  qnaContent: QnaContentItem;
}

export default function QnaDetailSection({ qnaContent }: QnaSectionProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('category');

  const handleReturnCategory = () => {
    setSearchParams({ category: categoryId || '' });
  };

  return (
    <section className="w-full h-full gap-8 ml-20">
      <div className="flex flex-col gap-y-4">
        <div
          className="flex items-center cursor-pointer gap-x-2"
          id="category-return-btn"
          onClick={handleReturnCategory}
        >
          <MdArrowBack color="gray" size={18} />
          <span className="text-gray-500">질문 목록</span>
        </div>
        <article className="w-full h-full">
          <h1 className="p-4 text-4xl font-bold">{qnaContent.contentTitle}</h1>
          <p className="p-4 mt-8 text-lg">{qnaContent.content}</p>
        </article>
      </div>
    </section>
  );
}
