import { QnaContentItem } from '../../type/qna';
import FaqButton from './FaqButton';

interface QnaSectionProps {
  contentList: QnaContentItem[];
  handleQnaButtonClick: (contentId: number) => void;
}

export default function FaqListSection({
  contentList,
  handleQnaButtonClick,
}: QnaSectionProps) {
  return (
    <section className="flex flex-col w-[600px] h-[600px] overflow-y-auto">
      {contentList &&
        contentList.map((item) => {
          return (
            <FaqButton
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
