import React from "react";

export default function SideBarList(props) {
  return (
    <li>
      <a
        href="#"
        className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative ${props.classOuterDiv}`}
      >
        <div
          className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0 ${props.classInnerDiv}`}
        ></div>
        <img src={props.svg} className="w-[29px] h-[29px]" alt={props.svgAlt} />
        <span className="ml-5 text-[18.971px]">{props.heading}</span>
      </a>
    </li>
  );
}
