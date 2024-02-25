import { useEffect, useState } from 'react';
import { categoryData, statusData } from '@util/study';
import { ProjectItem, StudyItem } from '../../types/study';
import Search from './Search';
import Modal from './Modal';

type CombinedItem = StudyItem | ProjectItem;

export default function Posts({
  studyList,
  projectList,
}: {
  studyList: StudyItem[];
  projectList: ProjectItem[];
}) {
  const [items, setItems] = useState<CombinedItem[]>([]);
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

  useEffect(() => {
    setItems([...studyList, ...projectList]);
  }, [studyList, projectList]);

  const filterCategory = (selectedCategory: string) => {
    setStatus('');
    setCategory(selectedCategory);
    if (selectedCategory === '전체') {
      setItems([...studyList, ...projectList]);
    } else if (selectedCategory === '프로젝트') {
      setItems(projectList);
    } else {
      setItems(studyList);
    }
  };

  const filterStatus = (selectedStatus: string) => {
    setStatus((prevStatus) =>
      prevStatus === selectedStatus ? '' : selectedStatus
    );
    let filteredItems =
      category === '프로젝트'
        ? projectList
        : category === '스터디'
          ? studyList
          : [...studyList, ...projectList];

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
        ('study_name' in item &&
          item.study_name &&
          item.study_name.toLowerCase().includes(searchText.toLowerCase())) ||
        ('project_name' in item &&
          item.project_name &&
          item.project_name.toLowerCase().includes(searchText.toLowerCase())) ||
        ('study_description' in item &&
          item.study_description &&
          item.study_description
            .toLowerCase()
            .includes(searchText.toLowerCase())) ||
        ('project_description' in item &&
          item.project_description &&
          item.project_description
            .toLowerCase()
            .includes(searchText.toLowerCase()))
      );
    });
  };

  const filteredItems = searchText ? applyFilters(items) : items;
  const sortedItems = filteredItems.sort((a, b) => {
    const dateA = 'study_end' in a ? a.study_end : a.project_end;
    const dateB = 'study_end' in b ? b.study_end : b.project_end;
    return new Date(dateA).getTime() - new Date(dateB).getTime();
  });

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
      <section className="flex flex-wrap items-center justify-between">
        <section className="flex gap-3">
          {statusData.map((item, index) => (
            <div
              className={`flex h-10 px-6 justify-center items-center rounded-full border ${
                status === item.status
                  ? 'border-blue-500 text-blue-500'
                  : 'border-gray-300 text-gray-600'
              } bg-white font-medium cursor-pointer`}
              key={index}
              onClick={() => filterStatus(item.status)}
            >
              {window.innerWidth > 768 ? `${item.name}만 보기` : item.name}
            </div>
          ))}
        </section>
        <section className="mt-4 sm:flex-col">
          <Search onSearch={handleSearch} />
        </section>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {sortedItems.map((item, index) => (
            <div
              className="flex flex-col p-4 bg-white border-2 border-gray-300 rounded-2xl hover:shadow-lg hover:cursor-pointer"
              key={index}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex justify-between mb-3 text-sm font-bold text-gray-400 border-b-2">
                <span>{'study_name' in item ? '스터디' : '프로젝트'}</span>
                <span>
                  ~
                  {'study_name' in item
                    ? (item as StudyItem).study_end.split('T')[0]
                    : (item as ProjectItem).project_end.split('T')[0]}
                </span>
              </div>
              <div className="flex items-center justify-center h-40 mb-5">
                <img
                  alt="Thumbnail"
                  className="object-cover w-full h-full rounded"
                  src={item.img_url}
                />
              </div>
              <div className="ml-3 mr-3">
                <p className="text-xl font-bold text-gray-800">
                  {'study_name' in item
                    ? (item as StudyItem).study_name
                    : (item as ProjectItem).project_name}
                </p>
                <p className="h-20 mt-2 overflow-hidden text-sm text-gray-600">
                  {'study_description' in item
                    ? (item as StudyItem).study_description
                    : (item as ProjectItem).project_description}
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
