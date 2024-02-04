import { useRef, useState } from 'react';

export default function ContactSection() {
  const tagRef = useRef<HTMLInputElement>(null);
  const [tagList, setTagList] = useState<string[]>([]);

  const handleAddTag = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (tagRef.current && tagRef.current.value) {
        setTagList([...tagList, tagRef.current.value]);
        tagRef.current.value = '';
      }
    }
  };

  return (
    <section className="flex flex-col items-center gap-y-2 justif-center min-w-[600px]">
      <h1 className="w-full mt-10 mb-10 text-4xl font-bold text-center">
        Ask us anything!
      </h1>
      <hr className="w-20 h-1 mb-20 bg-black" />
      {/* <div className="flex flex-col w-full text-xs text-gray-400">
        <div className="flex">
          <label>Address:</label>
          <span>부산대학교 정보컴퓨터공학부</span>
        </div>
        <div className="flex">
          <label>Contact:</label>
          <span>회장 박시형(010-1234-5678) / 부회장 손봉국(02-1234-5678)</span>
        </div>
        <div className="flex">
          <label>E-mail:</label>
          <span>tZUeh@example.com</span>
        </div>
      </div> */}
      <form className="flex flex-col w-full gap-y-4">
        <input
          className="w-full px-4 text-black bg-gray-100 border rounded-md h-9 focus:outline-none"
          placeholder="Email:"
        />
        <input
          className="w-full px-4 text-black bg-gray-100 border rounded-md h-9 focus:outline-none"
          placeholder="Title:"
        />
        <textarea
          className="w-full p-4 text-black bg-gray-100 border rounded-md h-28 focus:outline-none"
          placeholder="Content:"
        />
        {/** TODO: add tag input */}
        <div className="flex gap-x-2">
          <input
            className="flex items-center justify-center w-16 pl-4 text-black border rounded-full h-9"
            onKeyDown={handleAddTag}
            placeholder="+ Tag"
            ref={tagRef}
          />
          {tagList.map((tag) => (
            <span
              className="flex items-center justify-center w-16 text-black border rounded-full h-9 "
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full px-4 py-1 text-white rounded-md bg-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}
