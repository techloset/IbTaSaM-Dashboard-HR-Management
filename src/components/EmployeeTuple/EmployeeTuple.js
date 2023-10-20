import React from "react";

export default function EmployeeTuple(props) {
  return (
    <tr class="bg-white">
      <th scope="row" class="py-1 flex items-center whitespace-nowrap">
        <img class="rounded-full" src={props.imgSrc} />
        <span className="ml-2 flex-shrink-0">{props.name}</span>
      </th>
      <td class="px-14 py-1 text-black text-sm font-bold font-['Product Sans']">
        {props.depar}
      </td>
      <td class="px-6 py-1 text-black text-sm font-bold font-['Product Sans']">
        {props.age}
      </td>
      <td class="px-6 py-1">
        <span className="text-teal-500 text-sm font-bold font-['Product Sans']">
          +
        </span>
        <span className="text-black text-sm font-bold font-['Product Sans']">
          {props.disi}%
        </span>
      </td>
      <td class="pl-6 pr-1 py-1">
        <div class={`px-2 py-1 bg-teal-500 text-teal-500 ${props.statusColor} bg-opacity-20 rounded`}>
          <div class="text-center text-sm font-bold font-['Product Sans']">
            {props.status}
          </div>
        </div>
      </td>
    </tr>
  );
}
