import FaqButton from '@component/faqpage/FaqButton';
import { useSearchParams } from 'react-router-dom';

interface FaqSidebarProps {
  categoryList: string[];
  onClick: (category: string) => void;
}

export default function FaqSidebar({ categoryList, onClick }: FaqSidebarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('category') || '활동';

  return (
    <aside className="h-fit w-full sm:w-[200px] bg-white flex flex-row sm:flex-col overflow-auto gap-y-4 text-nowrap">
      {categoryList.map((item) => {
        return (
          <FaqButton
            isActivate={categoryId === item}
            key={item}
            label={item}
            onClick={() => onClick(item)}
          />
        );
      })}
    </aside>
  );
}
