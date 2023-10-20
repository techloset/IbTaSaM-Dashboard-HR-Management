import React from "react";
import emp1 from "../../assets/images/employee/employee1.png";

export default function EmployeeTuple(props) {
  return (
    <tr class="bg-white">
      <th scope="row" class="py-2 flex items-center">
        <img class="rounded-full" src={props.imgSrc} />
        <span className="mb-2 ml-2 flex-shrink-0">{props.name}</span>
      </th>
      <td class="py-2 text-black text-sm font-bold font-['Product Sans']">
        {props.depar}
      </td>
      <td class="px-6 py-2 text-black text-sm font-bold font-['Product Sans']">
        {props.age}
      </td>
      <td class="py-2">
        <span className="text-teal-500 text-sm font-bold font-['Product Sans']">
          +
        </span>
        <span className="text-black text-sm font-bold font-['Product Sans']">
          {props.disi}%
        </span>
      </td>
      <td class="py-2">
        <div class={`px-2 py-1 bg-teal-500 text-teal-500 ${props.statusColor} bg-opacity-20 rounded`}>
          <div class="text-center text-sm font-bold font-['Product Sans']">
            {props.status}
          </div>
        </div>
      </td>
    </tr>
  );
}
