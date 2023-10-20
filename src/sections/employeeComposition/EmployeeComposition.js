import React from "react";
import circle from "../../assets/svg/circle.svg";

export default function EmployeeComposition() {
  return (
    <div class="max-w-[375px] md:w-[375px] h-[295px] bg-white rounded-md border-2 border-violet-100 p-6 mx-auto">
      <div class="text-black text-xl font-bold font-['Product Sans'] tracking-tight">
        Employee Composition
      </div>
      <div className="flex justify-center relative">
        <img src={circle} alt="circle" className="py-3" />
        <div class="w-[83px] h-[46px] p-2.5 bg-white rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex absolute right-52 top-10">
          <div class="w-[13px] h-[26px] relative"></div>
          <div class="text-black text-xl font-bold font-['Product Sans'] tracking-tight">
            35%
          </div>
        </div>
        <div class="w-[75.77px] h-[43.71px] p-[9.50px] bg-white rounded-[9.50px] shadow justify-center items-center gap-[9.50px] inline-flex absolute right-7 bottom-4">
          <div class="w-[9.27px] h-[24.71px] relative"></div>
          <div class="text-black text-[19.01px] font-bold font-['Product Sans'] tracking-tight">
            65%
          </div>
        </div>
      </div>
      <div class="text-neutral-400 text-base font-normal font-['Product Sans'] tracking-tight text-center">
        856 employee total
      </div>
    </div>
  );
}
