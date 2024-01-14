import { qnaCategoryList } from '../../data/qna-data';
import { QnaCategory } from '../../type/qna';
import { QnaButton } from './QnaButton';

interface QnaSectionProps {
  qnaCategoryId: QnaCategory;
}

export default function QnaSection(props: QnaSectionProps) {
  const selectedCategoryContentList = qnaCategoryList.find((item) => {
    return item.categoryId === props.qnaCategoryId;
  });

  return (
    <section className="w-full h-full gap-8 ml-20">
      {selectedCategoryContentList &&
        selectedCategoryContentList.contentList.map((item) => {
          return (
            <QnaButton
              isContent={true}
              key={item.contentId}
              label={'Q.  ' + item.contentTitle}
              onClick={() => {}}
            />
          );
        })}
    </section>
  );
}
