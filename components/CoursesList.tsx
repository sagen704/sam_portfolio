import React from "react";
import { courses } from "./ui/paragraphs";

interface CoursesListProps {
  items: string[];
}

const CoursesList: React.FC<CoursesListProps> = ({ items }) => {
  return (
    <ul className="pt-[10px] text-sm md:text-[18px] text-gray-400 pb-[20px]">
      {items.map((item, index) => (
        <li className="pl-2 pb-4" key={index}>
          - {item}
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
