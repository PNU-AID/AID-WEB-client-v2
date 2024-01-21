import { QnaCategory, QnaCategoryItem } from '../../type/qna';
import { QnaButton } from './QnaButton';

interface QnaSidebarProps {
  categoryList: QnaCategoryItem[];
  onClick: (category: QnaCategory) => void;

}

export default function QnaSidebar(props: QnaSidebarProps) {
  return (
    <aside className="h-fit w-[200px] bg-white flex flex-col gap-4">
      {props.categoryList.map((item) => {
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
