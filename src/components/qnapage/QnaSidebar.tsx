import { QnaCategory, QnaCategoryItem } from '../../type/qna';
import { QnaButton } from './QnaButton';
import { useSearchParams } from 'react-router-dom';

interface QnaSidebarProps {
  categoryList: QnaCategoryItem[];
  onClick: (category: QnaCategory) => void;
}

export default function QnaSidebar({ categoryList, onClick }: QnaSidebarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('category');

  return (
    <aside className="h-fit w-[200px] bg-white flex flex-col gap-4">
      {categoryList.map((item) => {
        return (
          <QnaButton
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
