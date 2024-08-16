import React from "react";

interface CoursesListProps {
  items: string[];
}

const CoursesList: React.FC<CoursesListProps> = ({ items }) => {
  return (
    <ul className="pt-[10px] text-sm md:text-[22px] text-gray-400 pb-[20px]">
      {items.map((item, index) => (
        <li className="pb-3" key={index}>
          - {item}
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
