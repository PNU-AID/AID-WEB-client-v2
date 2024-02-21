import { FaqContentItem } from '@type/faq';
import FaqButton from '@component/faqpage/FaqButton';

interface FaqSectionProps {
  contentList: FaqContentItem[];
  handleFaqButtonClick: (contentId: number) => void;
}

export default function FaqListSection({
  contentList,
  handleFaqButtonClick,
}: FaqSectionProps) {
  return (
    <section className="flex flex-col w-[600px] h-[600px] overflow-y-auto">
      {contentList &&
        contentList.map((item) => {
          return (
            <FaqButton
              isContent={true}
              key={item.id}
              label={'Q.  ' + item.title}
              onClick={() => handleFaqButtonClick(item.id)}
            />
          );
        })}
    </section>
  );
}
