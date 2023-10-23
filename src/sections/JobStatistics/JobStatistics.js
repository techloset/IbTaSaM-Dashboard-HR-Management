import React from "react";
import arrowDown from "../../assets/svg/jobStatisticsSvg/akar-icons_chevron-down.svg";
import ReChart from "../../components/ReChart/ReChart";
const JobStatistics = () => {
  return (
    <div className="grid grid-cols-1 my-7 overflow-x-auto">
      <div className="w-[1115px] md:h-[362px] bg-white border-[2px] border-_borderColor rounded-[6px] p-6">
        <div className="flex items-center justify-between mb-9">
          <div className="text-center sm:text-left text-black text-[22.40px] font-bold font-['Product Sans'] tracking-tight flex-shrink-0">
            Job Statistics
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-4 h-4 bg-violet-50 rounded-sm"></div>
            <div className="text-center text-black text-sm font-bold font-['Product Sans'] tracking-tight ml-2 flex-shrink-0">
              Job View
            </div>
            <div className="w-4 h-4 bg-indigo-600 rounded-sm ml-5"></div>
            <div className="text-center text-black text-sm font-bold font-['Product Sans'] tracking-tight ml-2 flex-shrink-0">
              Job Applied
            </div>

            <div className="ml-5 w-[119px] h-[37px] p-2.5 bg-neutral-100 rounded-xl justify-start items-start gap-2.5 inline-flex">
              <div className="text-center text-blue-900 text-sm font-bold font-['Product Sans'] tracking-tight flex-shrink-0">
                This Month
              </div>
              <div className="w-4 h-4 relative">
                <img src={arrowDown} alt="arrowDownIcon" />
              </div>
            </div>
          </div>
        </div>
        <ReChart />
      </div>
    </div>
  );
};
export default JobStatistics;
