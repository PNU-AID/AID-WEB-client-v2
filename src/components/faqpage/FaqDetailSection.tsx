import { MdArrowBack } from 'react-icons/md';
import { FaqContentItem } from '../../type/faq';
import { useSearchParams } from 'react-router-dom';

interface FaqSectionProps {
  faqContent: FaqContentItem;
}

export default function FaqDetailSection({ faqContent }: FaqSectionProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('category');

  const handleReturnCategory = () => {
    setSearchParams({ category: categoryId || '' });
  };

  return (
    <section className="w-[600px] h-[600px] flex flex-col">
      <div className="flex flex-col gap-y-4">
        <div
          className="flex items-center cursor-pointer gap-x-2"
          id="category-return-btn"
          onClick={handleReturnCategory}
        >
          <MdArrowBack color="gray" size={18} />
          <span className="text-gray-500">질문 목록</span>
        </div>
        <article className="flex flex-col gap-y-8">
          <h1 className="text-4xl font-bold">{faqContent.contentTitle}</h1>
          <p className="text-lg">{faqContent.content}</p>
        </article>
      </div>
    </section>
  );
}
