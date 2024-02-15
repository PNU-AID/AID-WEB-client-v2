import { useState } from 'react';
import { RiSearchLine, RiCloseLine } from 'react-icons/ri';

const Search = ({ onSearch }: { onSearch: (searchText: string) => void }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onSearch(value);
  };

  const handleClear = () => {
    setInputValue('');
    onSearch('');
  };

  return (
    <div className="relative flex items-center h-8 bg-gray-100 rounded-full">
      <RiSearchLine className="absolute text-gray-500 left-3 top-2" />
      <input
        className="w-64 pl-10 font-semibold bg-transparent outline-none"
        onChange={handleChange}
        placeholder="제목이나 내용을 검색해보세요."
        value={inputValue}
      ></input>
      {inputValue && (
        <RiCloseLine
          className="absolute text-gray-500 cursor-pointer right-3 top-2"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default Search;
