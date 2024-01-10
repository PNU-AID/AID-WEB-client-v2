import { useState } from 'react';
import { studyData } from '../../assets/data';

function Posts() {
  const [category, setCategory] = useState(studyData);

  return (
    <div className="container m-auto">
      <div className="grid grid-cols-2 gap-12">
        {category.map((item, index) => (
          <div
            className="flex transition-transform duration-300 border rounded-lg shadow-lg hover:scale-105"
            key={index}
          >
            <img
              alt={item.name}
              className="h-[200px] object-cover rounded-t-lg"
              src={item.image}
            />
            <div className="flex flex-col pl-2 pt-14">
              <p className="font-bold">
                {item.name}
                <span className="p-1 ml-3 text-white bg-blue-400 rounded-full">
                  {item.status}
                </span>
              </p>
              <p className="mt-5">{item.info}</p>
              <p className="">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
