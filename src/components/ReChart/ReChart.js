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
    name: "Jan",
    dark: 50,
    lite: 15,
  },
  {
    name: "Feb",
    dark: 62,
    lite: 16,
  },
  {
    name: "Mar",
    dark: 72,
    lite: 18,
  },
  {
    name: "April",
    dark: 58,
    lite: 15,
  },
  {
    name: "May",
    dark: 43,
    lite: 15,
  },
  {
    name: "Jun",
    dark: 58,
    lite: 15,
  },
  {
    name: "Jul",
    dark: 62,
    lite: 16,
  },
  {
    name: "Aug",
    dark: 77,
    lite: 25,
  },
  {
    name: "Sep",
    dark: 64,
    lite: 20,
  },
  {
    name: "Oct",
    dark: 58,
    lite: 22,
  },
  {
    name: "Nov",
    dark: 50,
    lite: 12,
  },
  {
    name: "Dec",
    dark: 73,
    lite: 15,
  },
  // {
  //   name: "Feb",
  //   uv: 12,
  //   pv: 43,
  // },
  // {
  //   name: "Mar",
  //   uv: 20,
  //   pv: 50,
  // },
  // {
  //   name: "Apr",
  //   uv: 10,
  //   pv: 40,
  // },
  // {
  //   name: "May",
  //   uv: 13,
  //   pv: 23,
  // },
  // {
  //   name: "Jun",
  //   uv: 10,
  //   pv: 40,
  // },
  // {
  //   name: "July",
  //   uv: 12,
  //   pv: 43,
  // },
  // {
  //   name: "Aug",
  //   uv: 30,
  //   pv: 53,
  // },
  // {
  //   name: "Sep",
  //   uv: 25,
  //   pv: 45,
  // },
  // {
  //   name: "Oct",
  //   uv: 20,
  //   pv: 40,
  // },
  // {
  //   name: "Nov",
  //   uv: 18,
  //   pv: 30,
  // },
  // {
  //   name: "Dec",
  //   uv: 15,
  //   pv: 55,
  // },
];

export default class ReChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -30,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="4"
            stroke="#E0E0E0"
            horizontal={true}
            vertical={false}
          />

          <XAxis
            axisLine={false}
            fontFamily="sans-serif"
            tickLine={false}
            dataKey="name"
            stroke="#BCBCBC"
            fontSize={13}
            fontWeight={500}
          />
          <YAxis
            type="number"
            domain={[20, 100]}
            axisLine={false}
            fontFamily="sans-serif"
            tickLine={false}
            dataKey="number"
            stroke="#BCBCBC"
            fontSize={14.335}
            fontWeight={400}
          />
          <Bar dataKey="dark" stackId="a" fill="#5932EA" />
          <Bar dataKey="lite" stackId="a" fill="#F2EFFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
