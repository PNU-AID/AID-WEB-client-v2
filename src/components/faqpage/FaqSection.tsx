import { SlMagnifier } from 'react-icons/sl';
import FaqDetailSection from './FaqDetailSection';
import FaqListSection from './FaqListSection';
import FaqSidebar from './FaqSidebar';
import { QnaCategory, QnaCategoryItem, QnaContentItem } from '../../type/qna';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCategoryList } from '../../utils/qna';

export default function FaqSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('category');
  const currentCategoryId = categoryId
    ? (Number(categoryId) as QnaCategory)
    : QnaCategory.TOP;

  const contentId = searchParams.get('content');

  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const [qnaCategoryList, setQnaCategoryList] = useState<
    QnaCategoryItem[] | null
  >([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const onClickCategory = (category: QnaCategory) => {
    console.log(category);
    setSearchParams({ category: category.toString() });
  };

  const searchResults: QnaContentItem[] = [];

  useEffect(() => {
    const fetch = async () => {
      const list = await getCategoryList();
      setQnaCategoryList(list);
    };

    fetch();
  }, []);

  if (qnaCategoryList) {
    qnaCategoryList.forEach((category) => {
      category.contentList.forEach((content) => {
        if (
          content.contentTitle.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          searchResults.push(content);
        }
      });
    });
  }

  if (!qnaCategoryList) {
    return <p>Loading...</p>;
  }

  const handleQnaButtonClick = (contentId: number) => {
    setSearchParams({
      category: currentCategoryId.toString(),
      content: contentId.toString(),
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-y-2 max-w-[1000px]">
      <h1 className="w-full mt-10 mb-10 text-4xl font-bold text-center">FAQ</h1>
      <hr className="w-20 h-1 mb-20 bg-black" />
      <div
        className="relative w-full m-4 border-b border-gray-400 h-fit focus:border-primary"
        id="faq-search"
        ref={ref}
      >
        <SlMagnifier
          className="absolute top-0 left-0 m-auto bottom-4"
          color="gray"
          size={28}
        />
        <input
          className="w-full h-full ml-12 text-2xl focus:outline-none text-[#4e5968] pb-4"
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="무엇이든 찾아보세요"
          type="text"
        />
        {isFocused && (
          <ul
            className="absolute left-0 w-full mt-1 overflow-auto text-sm bg-white gap-2 text-tprimary rounded-xl top-full max-h-80 z-[100] shadow-2xl"
            id="faq-search-results"
          >
            {searchTerm ? (
              searchResults.map((result, index) => (
                <li
                  className="p-4 m-1 cursor-pointer rounded-xl hover:bg-gray-100"
                  key={index}
                >
                  {result.contentTitle}
                </li>
              ))
            ) : (
              <p className="p-4 m-1 text-sm rounded-xl text-tsecondary">
                검색어를 입력해주세요
              </p>
            )}
          </ul>
        )}
      </div>
      {qnaCategoryList[currentCategoryId] && (
        <div className="relative flex w-full" id="faq-body">
          <FaqSidebar
            categoryList={qnaCategoryList}
            onClick={onClickCategory}
          />
          {contentId ? (
            <FaqDetailSection
              faqContent={
                qnaCategoryList[currentCategoryId].contentList.find(
                  (content) => content.contentId === Number(contentId)
                )!
              }
            />
          ) : (
            <FaqListSection
              contentList={qnaCategoryList[currentCategoryId].contentList}
              handleQnaButtonClick={handleQnaButtonClick}
            />
          )}
        </div>
      )}
    </section>
  );
}