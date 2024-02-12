import { useEffect, useState } from 'react';
import { categoryData, statusData } from '@util/study';
import { ProjectItem, StudyItem } from '../../types/study';
import { ProjectItemList, StudyItemList } from '../../data/study-data';
import Search from './Search';
import Modal from './Modal';

type CombinedItem = StudyItem | ProjectItem;

function Posts() {
  const [items, setItems] = useState<CombinedItem[]>([
    ...StudyItemList,
    ...ProjectItemList,
  ]);
  const [status, setStatus] = useState<string>();
  const [category, setCategory] = useState<string>('전체');
  const [selectedItem, setSelectedItem] = useState<CombinedItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const filterCategory = (selectedCategory: string) => {
    setStatus('');
    setCategory(selectedCategory);
    if (selectedCategory === '전체') {
      setItems([...StudyItemList, ...ProjectItemList]);
    } else if (selectedCategory === '프로젝트') {
      setItems(ProjectItemList);
    } else {
      setItems(StudyItemList);
    }
  };

  const filterStatus = (selectedStatus: string) => {
    setStatus((prevStatus) =>
      prevStatus === selectedStatus ? '' : selectedStatus
    );
    let filteredItems =
      category === '프로젝트'
        ? ProjectItemList
        : category === '스터디'
          ? StudyItemList
          : [...StudyItemList, ...ProjectItemList];

    if (status !== selectedStatus) {
      filteredItems = filteredItems.filter(
        (item) => item.status === selectedStatus
      );
    }
    setItems(filteredItems);
  };

  const handleItemClick = (selectedItem: CombinedItem) => {
    setSelectedItem(selectedItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const applyFilters = (itemsToFilter: CombinedItem[]) => {
    return itemsToFilter.filter((item) => {
      return (
        ('studyName' in item &&
          item.studyName &&
          item.studyName.toLowerCase().includes(searchText.toLowerCase())) ||
        ('projectName' in item &&
          item.projectName &&
          item.projectName.toLowerCase().includes(searchText.toLowerCase())) ||
        ('studyDescription' in item &&
          item.studyDescription &&
          item.studyDescription
            .toLowerCase()
            .includes(searchText.toLowerCase())) ||
        ('projectDescription' in item &&
          item.projectDescription &&
          item.projectDescription
            .toLowerCase()
            .includes(searchText.toLowerCase()))
      );
    });
  };

  const filteredItems = searchText ? applyFilters(items) : items;

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
        <section className="flex gap-3">
          {statusData.map((item, index) => (
            <div
              className={`flex h-10 px-6 justify-center items-center rounded-full border ${
                status === item.name
                  ? 'border-blue-500 text-blue-500'
                  : 'border-gray-300 text-gray-600'
              } bg-white font-medium cursor-pointer`}
              key={index}
              onClick={() => filterStatus(item.name)}
            >
              {item.name}만 보기
            </div>
          ))}
        </section>
        <Search onSearch={handleSearch} />
      </section>
      <section>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {filteredItems.map((item, index) => (
            <div
              className="flex flex-col p-4 bg-white border-2 border-gray-300 rounded-2xl hover:shadow-lg hover:cursor-pointer"
              key={index}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex justify-between mb-3 text-sm font-bold text-gray-400 border-b-2">
                <span>{'studyName' in item ? '스터디' : '프로젝트'}</span>
                <span>~{item.date}</span>
              </div>
              <div className="flex items-center justify-center h-40 mb-5">
                <img
                  alt="Thumbnail"
                  className="object-cover w-full h-full rounded"
                  src={item.imgUrl}
                />
              </div>
              <div className="ml-3 mr-3">
                <p className="text-xl font-bold text-gray-800">
                  {'studyName' in item
                    ? (item as StudyItem).studyName
                    : (item as ProjectItem).projectName}
                </p>
                <p className="h-20 mt-2 overflow-hidden text-sm text-gray-600">
                  {'studyDescription' in item
                    ? (item as StudyItem).studyDescription
                    : (item as ProjectItem).projectDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedItem={selectedItem}
      ></Modal>
    </>
  );
}

export default Posts;
