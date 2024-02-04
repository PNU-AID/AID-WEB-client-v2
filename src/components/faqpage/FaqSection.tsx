import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { SlMagnifier } from 'react-icons/sl';

import { FaqCategory, FaqCategoryItem, FaqContentItem } from '@type/faq';
import FaqDetailSection from '@component/faqpage/FaqDetailSection';
import FaqListSection from '@component/faqpage/FaqListSection';
import FaqSidebar from '@component/faqpage/FaqSidebar';
import { getCategoryList } from '@api/faq';

export default function FaqSection() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const contentId = searchParams.get('content');
  const categoryId = searchParams.get('category');
  const currentCategoryId = categoryId
    ? (Number(categoryId) as FaqCategory)
    : FaqCategory.TOP;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef]);

  const { data: faqCategoryList } = useQuery<FaqCategoryItem[]>({
    queryKey: 'faqCategoryList',
    queryFn: () => getCategoryList(),
  });
  if (!faqCategoryList) {
    return <p>Loading...</p>;
  }

  const searchResults: FaqContentItem[] = [];
  if (faqCategoryList) {
    faqCategoryList.forEach((category) => {
      category.contentList.forEach((content) => {
        if (
          content.contentTitle.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          searchResults.push(content);
        }
      });
    });
  }

  const handleCategory = (category: FaqCategory) => {
    // console.log(category);
    setSearchParams({ category: category.toString() });
  };

  const handleFaqButton = (contentId: number) => {
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
        ref={divRef}
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
      {faqCategoryList[currentCategoryId] && (
        <div className="relative flex w-full" id="faq-body">
          <FaqSidebar categoryList={faqCategoryList} onClick={handleCategory} />
          {contentId ? (
            <FaqDetailSection
              faqContent={
                faqCategoryList[currentCategoryId].contentList.find(
                  (content) => content.contentId === Number(contentId)
                )!
              }
            />
          ) : (
            <FaqListSection
              contentList={faqCategoryList[currentCategoryId].contentList}
              handleFaqButtonClick={handleFaqButton}
            />
          )}
        </div>
      )}
    </section>
  );
}
