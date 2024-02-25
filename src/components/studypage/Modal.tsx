import { ModalProps, ProjectItem, StudyItem } from '../../types/study';
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineCheck,
  AiOutlineFileText,
} from 'react-icons/ai';

export default function Modal({ isOpen, onClose, selectedItem }: ModalProps) {
  if (!isOpen || !selectedItem) {
    return null;
  }

  const isStudyItem = 'study_name' in selectedItem;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative w-full p-8 overflow-y-auto bg-white rounded-lg shadow-lg lg:w-3/5 md:w-2/3 h-2/3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <button
          className="absolute px-2 py-1 text-gray-600 bg-white rounded-full top-4 right-4 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="w-full">
          <p className="mb-4 text-2xl font-bold text-center">
            {isStudyItem
              ? (selectedItem as StudyItem).study_name
              : (selectedItem as ProjectItem).project_name}
          </p>
          <div className="flex flex-col lg:flex-row">
            {selectedItem.img_url && (
              <img
                alt="이미지"
                className="w-full h-auto mb-8 lg:w-1/3 lg:mr-8 lg:mb-0"
                src={selectedItem.img_url}
              />
            )}
            <div className="mb-4 text-base text-gray-600">
              <p>
                <AiOutlineCalendar className="inline-block mr-2" /> 시작일:{' '}
                {isStudyItem
                  ? (selectedItem as StudyItem).study_start.split('T')[0]
                  : (selectedItem as ProjectItem).project_end.split('T')[0]}
              </p>
              <p>
                <AiOutlineCalendar className="inline-block mr-2" /> 종료일:{' '}
                {isStudyItem
                  ? (selectedItem as StudyItem).study_end.split('T')[0]
                  : (selectedItem as ProjectItem).project_end.split('T')[0]}
              </p>
              {isStudyItem && (
                <p>
                  <AiOutlineUser className="inline-block mr-2" /> 스터디장:{' '}
                  {(selectedItem as StudyItem).leader}
                </p>
              )}
              <p>
                <AiOutlineTeam className="inline-block mr-2" /> 모집 인원:{' '}
                {selectedItem.max_participants}명
              </p>
              <p>
                <AiOutlineCheck className="inline-block mr-2" /> 상태 여부:{' '}
                {selectedItem.status}
              </p>
              <p>
                <AiOutlineFileText className="inline-block mr-2" /> 정리 자료:{' '}
                <a
                  href={
                    isStudyItem
                      ? (selectedItem as StudyItem).study_link
                      : (selectedItem as ProjectItem).project_link
                  }
                >
                  {isStudyItem
                    ? (selectedItem as StudyItem).study_link
                    : (selectedItem as ProjectItem).project_link}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="max-h-60">
          <p className="pt-6 pb-6 text-base text-gray-700">
            <AiOutlineFileText className="inline-block mr-2" /> 모집 설명 <br />
            {isStudyItem
              ? (selectedItem as StudyItem).study_description
              : (selectedItem as ProjectItem).project_description}
          </p>
        </div>
      </div>
    </div>
  );
}
