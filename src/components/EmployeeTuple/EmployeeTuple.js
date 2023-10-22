import React from "react";

export default function EmployeeTuple(props) {
  return (
    <tr className="bg-white">
      <th scope="row" className="py-1 flex items-center whitespace-nowrap">
        <img className="rounded-full" src={props.imgSrc} />
        <span className="ml-2 flex-shrink-0">{props.name}</span>
      </th>
      <td className="px-14 py-1 text-black text-sm font-bold font-['Product Sans']">
        {props.depar}
      </td>
      <td className="px-6 py-1 text-black text-sm font-bold font-['Product Sans']">
        {props.age}
      </td>
      <td className="px-6 py-1">
        <span className="text-teal-500 text-sm font-bold font-['Product Sans']">
          +
        </span>
        <span className="text-black text-sm font-bold font-['Product Sans']">
          {props.disi}%
        </span>
      </td>
      <td className="pl-6 pr-1 py-1">
        <div className={`px-2 py-1 bg-teal-500 text-teal-500 ${props.statusColor} bg-opacity-20 rounded`}>
          <div className="text-center text-sm font-bold font-['Product Sans']">
            {props.status}
          </div>
        </div>
      </td>
    </tr>
  );
}
