import React from "react";
import filter from "../../assets/svg/filter.svg";
import EmployeeTuple from "../../components/EmployeeTuple/EmployeeTuple";
import emp1 from "../../assets/images/employee/employee1.png";
import emp2 from "../../assets/images/employee/employee2.png";
import emp3 from "../../assets/images/employee/employee3.png";

const employeeData = [
  {
    imgSrc: emp1,
    name: "Justin Lipshutz",
    depar: "Marketing",
    age: "22",
    disi: "100",
    status: "Permanent",
  },
  {
    imgSrc: emp2,
    name: "Marcus Culhane",
    depar: "Finance",
    age: "24",
    disi: "95",
    statusColor: "bg-zinc-400 text-zinc-600",
    status: "Contract",
  },
  {
    imgSrc: emp3,
    name: "Leo Stanton",
    depar: "R&D",
    age: "28",
    disi: "89",
    status: "Permanent",
  },
];

export default function EmployeeStatus() {
  return (
    <div className="max-w-[713px] lg:w-[713px] max-h-[295.344px] mx-auto bg-white rounded-md border-2 border-violet-100 p-6 mb-5 xl:mb-0">
      <div className="flex justify-between">
        <div className="text-black text-xl font-bold font-['Product Sans'] tracking-tight">
          Employee Status
        </div>
        <div className="w-[131px] h-[34px] p-[9.06px] bg-neutral-100 rounded-[10.87px] justify-center items-center gap-[9.06px] inline-flex">
          <div className="text-center text-blue-900 text-xs font-[700] tracking-tight">
            Filter & Short
          </div>
          <div className="w-5 h-5 relative">
            <div className="w-[15.83px] h-[15px] left-[2.29px] top-[2.50px] absolute">
              <img src={filter} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left ">
          <thead className=" border-b">
            <tr>
              <th scope="col" className="py-3 flex-shrink-0 employee">
                Employee Name
              </th>
              <th scope="col" className="py-3 text-center employee">
                Department
              </th>
              <th scope="col" className="px-6 py-3 employee">
                Age
              </th>
              <th scope="col" className="py-3 text-center employee">
                Disipline
              </th>
              <th scope="col" className="pl-6 pr-3 py-3 text-end employee">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((item) => {
              return (
                <EmployeeTuple
                  imgSrc={item.imgSrc}
                  name={item.name}
                  depar={item.depar}
                  age={item.age}
                  disi={item.disi}
                  statusColor={item.statusColor}
                  status={item.status}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
