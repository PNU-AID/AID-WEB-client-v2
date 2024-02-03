import { QnaCategory, QnaCategoryItem } from '../../type/qna';
import FaqButton from './FaqButton';
import { useSearchParams } from 'react-router-dom';

interface FaqSidebarProps {
  categoryList: QnaCategoryItem[];
  onClick: (category: QnaCategory) => void;
}

export default function FaqSidebar({ categoryList, onClick }: FaqSidebarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('category');

  return (
    <aside className="h-fit w-[200px] bg-white flex flex-col gap-4">
      {categoryList.map((item) => {
        return (
          <FaqButton
            isActivate={categoryId === item.categoryId.toString()}
            key={item.categoryId}
            label={item.categoryName}
            onClick={() => onClick(item.categoryId)}
          />
        );
      })}
    </aside>
  );
}
