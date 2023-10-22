import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class ReChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Cell />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

// // import "./styles.css";
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const data = [
//   {
//     name: "Jan",
//     uv: 20,
//     pv: 20,
//     amt: 80,
//   },
//   {
//     name: "Feb",
//     uv: 3000,
//     pv: 1398,
//     // amt: 80,
//   },
//   {
//     name: "Mar",
//     uv: 2000,
//     pv: 9800,
//     // amt: 60,
//   },
//   {
//     name: "Apr",
//     uv: 2780,
//     pv: 3908,
//     // amt: 2000,
//   },
//   {
//     name: "May",
//     uv: 1890,
//     pv: 4800,
//     // amt: 2181,
//   },
//   {
//     name: "Jun",
//     uv: 2390,
//     pv: 3800,
//     // amt: 2500,
//   },
//   {
//     name: "Jul",
//     uv: 3490,
//     pv: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "Aug",
//     uv: 3490,
//     pv: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "Sep",
//     uv: 3490,
//     pv: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "Oct",
//     uv: 3490,
//     pv: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "Nov",
//     uv: 3490,
//     pv: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "Dec",
//     uv: 3490,
//     pv: 4300,
//     amt: 20,
//   },
// ];

// export default function ReChart() {
//   return (
//     <BarChart
//       width={900}
//       height={220}
//       data={data}
//       margin={{
//         top: 0,
//         right: 0,
//         left: 0,
//         bottom: 0,
//       }}
//     >
//       <CartesianGrid strokeDasharray="4 4" />
//       <XAxis dataKey="name" />
//       <YAxis dataKey="amt"/>
//       {/* <Tooltip /> */}
//       {/* <Legend /> */}
//       <Bar dataKey="pv" stackId="a" fill="#5932EA"/>
//       <Bar dataKey="uv" stackId="a" fill="#F2EFFF"/>
//     </BarChart>
//   );
// }
