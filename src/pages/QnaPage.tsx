import { SlMagnifier } from 'react-icons/sl';

function QnaPage() {
  return (
    <div className="w-full min-h-screen px-[200px] py-[120px]">
      <div className="flex flex-col gap-8">
        <h1 className="mt-10 text-2xl font-bold">자주 묻는 질문</h1>
        <div className="relative w-full m-4 border-b border-gray-400 h-fit">
          <SlMagnifier
            className="absolute top-0 left-0 m-auto bottom-4"
            color="gra"
            size={30}
          />

          <input
            className="w-full h-full ml-10 text-2xl focus:outline-none text-[#4e5968] pb-4"
            placeholder="무엇이든 찾아보세요"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default QnaPage;
