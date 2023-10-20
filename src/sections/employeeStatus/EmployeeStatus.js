import React from "react";
import filter from "../../assets/svg/filter.svg";
import EmployeeTuple from "../../components/EmployeeTuple/EmployeeTuple";
import emp1 from "../../assets/images/employee/employee1.png";
import emp2 from "../../assets/images/employee/employee2.png";
import emp3 from "../../assets/images/employee/employee3.png";

export default function EmployeeStatus() {
  return (
    <div class="max-w-[713px] lg:w-[713px]  max-h-[305.34px] bg-white rounded-md border-2 border-violet-100 p-6">
      <div className="flex justify-between">
        <div class="text-black text-xl font-bold font-['Product Sans'] tracking-tight">
          Employee Status
        </div>
        <div class="w-[131px] h-[34px] p-[9.06px] bg-neutral-100 rounded-[10.87px] justify-center items-center gap-[9.06px] inline-flex">
          <div class="text-center text-blue-900 text-xs font-bold font-['Product Sans'] tracking-tight">
            Filter & Short
          </div>
          <div class="w-5 h-5 relative">
            <div class="w-[15.83px] h-[15px] left-[2.29px] top-[2.50px] absolute">
              <img src={filter} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="relative overflow-x-auto mt-1">
        <table class="w-full text-left">
          <thead class="text-xs border-b">
            <tr className="">
              <th
                scope="col"
                class="py-3 text-neutral-400 text-sm font-normal font-['Product Sans'] tracking-tight flex-shrink-0"
              >
                Employee Name
              </th>
              <th
                scope="col"
                class="py-3 text-neutral-400 text-sm font-normal font-['Product Sans'] tracking-tight"
              >
                Department
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-neutral-400 text-sm font-normal font-['Product Sans'] tracking-tight"
              >
                Age
              </th>
              <th
                scope="col"
                class="py-3 text-neutral-400 text-sm font-normal font-['Product Sans'] tracking-tight"
              >
                Disipline
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-center text-neutral-400 text-sm font-normal font-['Product Sans'] tracking-tight"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <EmployeeTuple
              imgSrc={emp1}
              name="Justin Lipshutz"
              depar="Marketing"
              age="22"
              disi="100"
              status="Permanent"
            />
            <EmployeeTuple
              imgSrc={emp2}
              name="Marcus Culhane"
              depar="Finance"
              age="24"
              disi="95"
              statusColor="bg-zinc-400 text-zinc-600"
              status="Contract"
            />
            <EmployeeTuple
              imgSrc={emp3}
              name="Leo Stanton"
              depar="Marketing"
              age="28"
              disi="89"
              status="Permanent"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
