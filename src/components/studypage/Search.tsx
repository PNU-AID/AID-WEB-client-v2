import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex items-center h-8 px-5 bg-gray-100 rounded-full ">
      <RiSearchLine className="mr-2 text-gray-500" />
      <input
        className="font-semibold bg-transparent outline-none"
        onChange={(e) => {
          const { value } = e.target;
          setInputValue(value);
        }}
        placeholder="제목을 검색해보세요."
        value={inputValue}
      ></input>
    </div>
  );
};

export default Search;
