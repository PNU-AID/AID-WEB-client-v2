import { useState } from 'react';
import Select from './Select';
import Search from './Search';

function Filter() {
  const [selected, setSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const categories = ['전체', '프로젝트', '스터디'];

  const onlineOrOfflineOption = [
    { value: 'online', label: '온라인' },
    { value: 'offline', label: '오프라인' },
    { value: 'online_offline', label: '온/오프라인' },
  ];

  return (
    <>
      <section className="flex">
        {categories.map((category, index) => (
          <div
            className={`flex items-center mr-6 text-2xl font-bold cursor-pointer ${
              selectedCategory === category ? 'text-black' : 'text-gray-400'
            }`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <span className="ml-2">{category}</span>
          </div>
        ))}
      </section>
      <section className="flex items-center justify-between">
        <div className="flex gap-3">
          <Select
            onChange={handleSelectChange}
            options={onlineOrOfflineOption}
            placeholder={'진행 방식'}
            value={selectedOption}
          />
          <div
            className={`flex h-10 px-6 justify-center items-center rounded-full border ${
              selected ? 'border-blue-500' : 'border-gray-300'
            } ${
              selected ? 'text-blue-500' : 'text-gray-600'
            } bg-white font-medium cursor-pointer`}
            onClick={handleClick}
          >
            모집 중만 보기
          </div>
        </div>
        <Search />
      </section>
    </>
  );
}

export default Filter;
