import React from "react";

const JobStatistics = () => {
  return (
    <div className="grid grid-cols-1 my-7">
      <div className="max-w-[1115px] h-[362px] bg-white border-[2px] border-_borderColor rounded-[6px] p-6">
        <div className="md:flex items-center justify-between mb-9">
          <div class="text-center sm:text-left text-black text-[22.40px] font-bold font-['Product Sans'] tracking-tight flex-shrink-0">
            Job Statistics
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div class="w-4 h-4 bg-violet-50 rounded-sm"></div>
            <div class="text-center text-black text-sm font-bold font-['Product Sans'] tracking-tight ml-2 flex-shrink-0">
              Job View
            </div>
            <div class="w-4 h-4 bg-indigo-600 rounded-sm ml-5"></div>
            <div class="text-center text-black text-sm font-bold font-['Product Sans'] tracking-tight ml-2 flex-shrink-0">
              Job Applied
            </div>

            <div class="ml-5 w-[119px] h-[37px] p-2.5 bg-neutral-100 rounded-xl justify-start items-start gap-2.5 inline-flex">
              <div class="text-center text-blue-900 text-sm font-bold font-['Product Sans'] tracking-tight flex-shrink-0">
                This Month
              </div>
              <div class="w-4 h-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.66669 6L8.00002 11.3333L13.3334 6"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 relative">
          <div className="flex items-center">
            <div className="flex flex-col space-y-7">
              <div class="text-stone-300 text-[14.335px] font-[400] leading-normal font-['Product Sans'] tracking-[0.143px]">
                100
              </div>
              <div class="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
                80
              </div>
              <div class="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
                60
              </div>
              <div class="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
                40
              </div>
              <div class="text-stone-300 text-sm font-medium leading-normal font-['Product Sans'] tracking-tight">
                20
              </div>
            </div>
            <div className="flex flex-col space-y-12 ml-10 [&>div]:w-[280px] [&>div]:md:w-[330px] [&>div]:lg:w-[590px] [&>div]:xl:w-[1000px]">
              {/* <div class="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
              <div class="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
              <div class="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
              <div class="h-[0px] mx-auto border border-dotted border-neutral-200"></div>
              <div class="h-[0px] mx-auto border border-dotted border-neutral-200"></div> */}
            </div>
          </div>
          <div className="absolute flex justify-end items-end lg:space-x-3 xl:space-x-[29px] right-0 bottom-[-10%]">
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[111px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[81px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Jan
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[142px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[106px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Feb
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[176px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[127px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Mar
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[131px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[96px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Apr
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[94px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[61px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                May
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[131px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[94px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Jun
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[142px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[110px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Jul
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[71.314px] h-[207px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[71px] h-[136px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-[#1F1515] text-[13px] font-[600] font-['Poppins'] mt-2">
                Aug
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[181px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[117px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Sep
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[152px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[94px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-[500] font-['Poppins'] mt-2">
                Oct
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[111px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[76px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-medium font-['Poppins'] mt-2">
                Nov
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div class="w-[55.27px] h-[168px] bg-violet-50 rounded-lg flex items-end flex-shrink-0">
                <div class="w-[55px] h-[131px] bg-indigo-600 rounded-lg flex-shrink-0 graphShadow"></div>
              </div>
              <div class="w-[26.74px] text-center text-stone-300 text-[13px] font-medium font-['Poppins'] mt-2">
                Dec
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobStatistics;
