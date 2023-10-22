import React from "react";
import circle from "../../assets/svg/circle.svg";

export default function EmployeeComposition() {
  return (
    <div className="max-w-[375px] md:w-[375px] h-[295px] bg-white rounded-md border-2 border-violet-100 p-6 mx-auto">
      <div className="text-black text-xl font-bold font-['Product Sans'] tracking-tight">
        Employee Composition
      </div>
      <div className="flex justify-center relative">
        <img src={circle} alt="circle" className="py-3" />
        <div className="w-[83px] h-[46px] p-2.5 bg-white rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex absolute right-52 top-10">
          <div className="w-[13px] h-[26px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="26"
              viewBox="0 0 13 26"
              fill="none"
            >
              <g clip-path="url(#clip0_701_216)">
                <path
                  d="M6.50015 0C8.29506 0 9.75015 1.45509 9.75015 3.25C9.75015 5.04491 8.29506 6.5 6.50015 6.5C4.70523 6.5 3.25015 5.04491 3.25015 3.25C3.25015 1.45509 4.70523 0 6.50015 0ZM12.5575 17.9857L10.12 8.23565C10.0541 7.97197 9.9019 7.7379 9.68767 7.57063C9.47344 7.40336 9.20944 7.3125 8.93765 7.3125H8.36077C7.20748 7.84281 5.84253 7.86571 4.63952 7.3125H4.06265C3.79085 7.3125 3.52686 7.40336 3.31263 7.57063C3.0984 7.7379 2.94623 7.97197 2.88031 8.23565L0.442808 17.9857C0.250753 18.7538 0.832097 19.5 1.62515 19.5H4.4689V24.7812C4.4689 25.4544 5.01454 26 5.68765 26H7.31265C7.98575 26 8.5314 25.4544 8.5314 24.7812V19.5H11.3751C12.1669 19.5 12.7498 18.755 12.5575 17.9857Z"
                  fill="#5832E6"
                />
              </g>
              <defs>
                <clipPath id="clip0_701_216">
                  <rect width="13" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-black text-xl font-bold font-['Product Sans'] tracking-tight">
            35%
          </div>
        </div>
        <div className="w-[75.77px] h-[43.71px] p-[9.50px] bg-white rounded-[9.50px] shadow justify-center items-center gap-[9.50px] inline-flex absolute right-7 bottom-4">
          <div className="w-[9.27px] h-[24.71px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="26"
              viewBox="0 0 10 26"
              fill="none"
            >
              <g clip-path="url(#clip0_701_220)">
                <path
                  d="M5.13553 0.502319C6.84119 0.502319 8.22392 1.88505 8.22392 3.59072C8.22392 5.29638 6.84119 6.67911 5.13553 6.67911C3.42986 6.67911 2.04713 5.29638 2.04713 3.59072C2.04713 1.88505 3.42986 0.502319 5.13553 0.502319ZM7.45182 7.45121H6.90363C5.80769 7.95515 4.51061 7.97692 3.36742 7.45121H2.81923C1.53996 7.45121 0.50293 8.48824 0.50293 9.76751V16.3304C0.50293 16.97 1.02144 17.4885 1.66108 17.4885H2.43318V24.0514C2.43318 24.691 2.95169 25.2095 3.59133 25.2095H6.67973C7.31936 25.2095 7.83787 24.691 7.83787 24.0514V17.4885H8.60997C9.24961 17.4885 9.76812 16.97 9.76812 16.3304V9.76751C9.76812 8.48824 8.7311 7.45121 7.45182 7.45121Z"
                  fill="#16C098"
                />
              </g>
              <defs>
                <clipPath id="clip0_701_220">
                  <rect
                    width="9.26519"
                    height="24.7072"
                    fill="white"
                    transform="translate(0.502747 0.502808)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-black text-[19.01px] font-bold font-['Product Sans'] tracking-tight">
            65%
          </div>
        </div>
      </div>
      <div className="text-neutral-400 text-base font-normal font-['Product Sans'] tracking-tight text-center">
        856 employee total
      </div>
    </div>
  );
}
