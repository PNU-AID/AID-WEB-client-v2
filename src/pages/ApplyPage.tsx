import ApplyComponent from '../components/applypage/ApplyComponent';

function ApplyPage() {
  return (
    <div className="w-full bg-darkdarkgray h-fit flex flex-col items-center py-[20vh] text-white gap-12">
      <div className="text-4xl font-bold">지원서 작성하기</div>

      <div className="text-sm">2024년도 1학기 AID 3기 부원</div>

      <ApplyComponent />
    </div>
  );
}

export default ApplyPage;
