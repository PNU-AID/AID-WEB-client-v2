import { qnaCategoryList } from '../../data/qna-data';
import { QnaCategory } from '../../type/qna';
import { QnaButton } from './QnaButton';

interface QnaSidebarProps {
  onClick: (category: QnaCategory) => void;
}

export default function QnaSidebar(props: QnaSidebarProps) {
  return (
    <aside className="h-fit w-[200px] bg-white flex flex-col gap-4">
      {qnaCategoryList.map((item) => {
        return (
          <QnaButton
            key={item.categoryId}
            label={item.categoryName}
            onClick={() => props.onClick(item.categoryId)}
          />
        );
      })}
    </aside>
  );
}
