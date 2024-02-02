import { ModalProps } from '../../type/study';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedStudy }) => {
  if (!isOpen || !selectedStudy) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-1/2 p-8 overflow-hidden bg-white rounded-lg shadow-lg h-2/3">
        <button
          className="absolute px-2 py-1 text-gray-600 bg-white rounded-full top-4 right-4 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <p className="mb-4 text-2xl font-bold text-center">
          {selectedStudy.name}
        </p>
        <div className="mb-4 text-base text-gray-600">
          <p>📚 카테고리: {selectedStudy.category}</p>
          <p>📅 마감일: {selectedStudy.date}</p>
          <p>👤 스터디장: {selectedStudy.leader}</p>
          <p>👥 모집 인원: {selectedStudy.number}명</p>
          <p>👥 모집 대상: {selectedStudy.target}</p>
          <p>☑️ 상태 여부: {selectedStudy.status}</p>
        </div>
        <div className="overflow-hidden max-h-40">
          <p className="mb-4 text-base text-gray-700">
            📝 모집 설명 <br />
            {selectedStudy.description}
            스터디 url은 ~~입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
