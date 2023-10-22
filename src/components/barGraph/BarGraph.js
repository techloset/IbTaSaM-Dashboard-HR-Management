import React from "react";
import downArrow from "../../assets/svg/downArrow.svg";

export default function BarGraph() {
  return (
    <div className="grid grid-cols-1 relative">
      <div className="flex items-center">
        <div className="flex flex-col space-y-7">
          <div className="text-stone-300 text-[14.335px] font-[400] leading-normal font-['Product Sans'] tracking-[0.143px]">
            100
          </div>
          <div className="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
            80
          </div>
          <div className="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
            60
          </div>
          <div className="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
            40
          </div>
          <div className="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
            20
          </div>
        </div>
        <div className="flex flex-col space-y-12 ml-10 flex-shrink-0 [&>div]:w-[1000px]">
          <div className="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
          <div className="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
          <div className="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
          <div className="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
          <div className="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
        </div>
      </div>
      <div className="">
        <div className="absolute flex justify-end items-end space-x-[29px] right-0 bottom-[-10%]">
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[111px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[81px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Jan
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[142px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[106px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Feb
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[176px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[127px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Mar
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[131px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[96px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Apr
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[94px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[61px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              May
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[131px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[94px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Jun
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[142px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[110px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Jul
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[71.314px] h-[207px] bg-violet-50 rounded-lg flex flex-col items-end justify-end flex-shrink-0">
              <div className="graphShadow w-8 h-[21px] mx-auto px-2 py-0.5 bg-blue-900 rounded shadow justify-start items-start gap-2.5 inline-flex">
                <div className="text-center text-white text-sm font-normal font-['Product Sans'] tracking-wide">
                  77
                </div>
              </div>
              <img src={downArrow} className="mt-[-4px] mx-auto" alt="" />
              <div className="w-[71px] h-[136px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-[#1F1515] text-[13px] font-[600] font-['Poppins'] mt-[11px]">
              Aug
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[181px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[117px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Sep
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[152px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[94px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-[11px]">
              Oct
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[111px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[76px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-medium font-['Poppins'] mt-[11px]">
              Nov
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[55.27px] h-[168px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
              <div className="w-[55px] h-[131px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
            </div>
            <div className="w-[26.74px] text-center text-stone-300 text-[13px] font-medium font-['Poppins'] mt-[11px]">
              Dec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
