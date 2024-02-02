import { QnaContentItem } from '../../type/qna';
import { QnaButton } from './QnaButton';

interface QnaSectionProps {
  contentList: QnaContentItem[];
  handleQnaButtonClick: (contentId: number) => void;
}

export default function QnaSection({
  contentList,
  handleQnaButtonClick,
}: QnaSectionProps) {
  return (
    <section className="w-full h-full gap-8 ml-20">
      {contentList &&
        contentList.map((item) => {
          return (
            <QnaButton
              isContent={true}
              key={item.contentId}
              label={'Q.  ' + item.contentTitle}
              onClick={() => handleQnaButtonClick(item.contentId)}
            />
          );
        })}
    </section>
  );
}
