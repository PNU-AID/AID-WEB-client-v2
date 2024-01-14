import { SlMagnifier } from 'react-icons/sl';
import QnaSidebar from '../components/qnapage/QnaSidebar';
import QnaSection from '../components/qnapage/QnaSection';
import { QnaCategory, QnaContentItem } from '../type/qna';
import { useState, useEffect, useRef } from 'react';
import { qnaCategoryList } from '../data/qna-data';
import { useNavigate, useSearchParams } from 'react-router-dom';

function QnaPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('category');
  const currentCategoryId = categoryId
    ? (Number(categoryId) as QnaCategory)
    : QnaCategory.TOP;

  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

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
    navigate('/qna?category=' + category);
  };

  const searchResults: QnaContentItem[] = [];

  qnaCategoryList.forEach((category) => {
    category.contentList.forEach((content) => {
      if (
        content.contentTitle.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        searchResults.push(content);
      }
    });
  });

  return (
    <div className="w-full min-h-screen px-[200px] py-[120px]">
      <div className="flex flex-col gap-8">
        <h1 className="mt-10 text-2xl font-bold">자주 묻는 질문</h1>
        <div
          className="relative w-full m-4 border-b border-gray-400 h-fit focus:border-primary"
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
            <ul className="absolute left-0 w-full mt-1 overflow-auto text-sm bg-white gap-2 text-tprimary rounded-xl top-full max-h-80 z-[100] shadow-2xl">
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
        <div className="relative flex">
          <QnaSidebar onClick={onClickCategory} />
          <QnaSection qnaCategoryId={currentCategoryId} />
        </div>
      </div>
    </div>
  );
}

export default QnaPage;
