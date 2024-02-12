import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ModalProps } from '../../type/study';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedStudy }) => {
  if (!isOpen || !selectedStudy) {
    return null;
  }

  // fake data generator(가짜 데이터 제너레이터)
  const getItems = (count) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k}`,
      content: `item ${k}`,
    }));

  // a little function to help us with reordering the result(결과 재정렬을 돕는 함수)
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // using some little inline style helpers to make the app look okay(보기좋게 앱을 만드는 인라인 스타일 헬퍼)
  const grid = 8;
  const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer(아이템을 보기 좋게 만드는 몇 가지 기본 스타일)
    userSelect: 'none',
    padding: grid * 2,
    marginBottom: grid,

    // change background colour if dragging(드래깅시 배경색 변경)
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables(드래그에 필요한 스타일 적용)
    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
  });

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
          {selectedStudy.studyName}
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
            {selectedStudy.studyDescription}
            스터디 url은 ~~입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
