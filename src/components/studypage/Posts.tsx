import { useState, ChangeEvent } from 'react';
import { categoryData, onOffline, studyData } from '../../assets/data';
import Select from './Select';
import Search from './Search';
import Modal from './Modal';

export interface StudyCard {
  name: string;
  category: string;
  date: string;
  description: string;
  target: string;
  number: string;
  image: string;
  leader: string;
  status: string;
}

function Posts() {
  const [study, setStudy] = useState<StudyCard[]>(studyData);
  const [status, setStatus] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('전체');
  const [selectedStudy, setSelectedStudy] = useState<StudyCard | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filterCategory = (selectedCategory: string) => {
    setStatus(false);
    setCategory(selectedCategory);
    if (selectedCategory === '전체') {
      setStudy(studyData);
    } else {
      setStudy(
        studyData.filter((item) => {
          return item.category === selectedCategory;
        })
      );
    }
  };

  const filterStatus = () => {
    setStatus((prevStatus) => {
      const newStatus = !prevStatus;
      setStudy((prevStudy) => {
        if (newStatus) {
          return prevStudy.filter((item) => item.status === '모집 중');
        } else {
          filterCategory(category);
          return studyData;
        }
      });
      return newStatus;
    });
  };

  const filterOnOffline = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const handleStudyClick = (selectedStudy: StudyCard) => {
    setSelectedStudy(selectedStudy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="flex">
        {categoryData.map((item, index) => (
          <div
            className={`flex items-center mr-6 text-2xl font-bold cursor-pointer ${
              category === item.name ? 'text-black' : 'text-gray-400'
            }`}
            key={index}
            onClick={() => filterCategory(item.name)}
          >
            <span className="ml-2">{item.name}</span>
          </div>
        ))}
      </section>
      <section className="flex items-center justify-between">
        <div className="flex gap-3">
          <Select
            onChange={filterOnOffline}
            options={onOffline}
            placeholder={'진행 방식'}
            value={selectedOption}
          />
          <div
            className={`flex h-10 px-6 justify-center items-center rounded-full border ${
              status ? 'border-blue-500' : 'border-gray-300'
            } ${
              status ? 'text-blue-500' : 'text-gray-600'
            } bg-white font-medium cursor-pointer`}
            onClick={() => filterStatus()}
          >
            모집 중만 보기
          </div>
        </div>
        <Search />
      </section>
      <section>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {study.map((item, index) => (
            <div
              className="flex flex-col p-4 bg-white border-2 border-gray-300 rounded-2xl hover:shadow-md"
              key={index}
              onClick={() => handleStudyClick(item)}
            >
              <div className="flex justify-between mb-3 text-sm font-bold text-gray-400 border-b-2">
                <span>{item.category}</span>
                <span>~{item.date}</span>
              </div>
              <p className="text-xl font-bold text-gray-800">{item.name}</p>
              <p className="mt-2 overflow-hidden text-sm text-gray-600 h-36">
                {item.description}
              </p>
              <div className="flex items-center mt-3 text-sm text-gray-700">
                <img
                  alt={item.leader}
                  className="w-6 h-6 mr-2 rounded-full"
                  src={item.image}
                />
                {item.leader}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedStudy={selectedStudy}
      ></Modal>
    </>
  );
}

export default Posts;
