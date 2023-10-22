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
    uv: 18,
    pv: 30,
    number: 80,
  },
  {
    name: "Feb",
    uv: 12,
    pv: 43,
  },
  {
    name: "Mar",
    uv: 20,
    pv: 50,
  },
  {
    name: "Apr",
    uv: 10,
    pv: 40,
  },
  {
    name: "May",
    uv: 13,
    pv: 23,
  },
  {
    name: "Jun",
    uv: 10,
    pv: 40,
  },
  {
    name: "July",
    uv: 12,
    pv: 43,
  },
  {
    name: "Aug",
    uv: 30,
    pv: 53,
  },
  {
    name: "Sep",
    uv: 25,
    pv: 45,
  },
  {
    name: "Oct",
    uv: 20,
    pv: 40,
  },
  {
    name: "Nov",
    uv: 18,
    pv: 30,
  },
  {
    name: "Dec",
    uv: 15,
    pv: 55,
  },
];

export default class ReChart extends PureComponent {
  //   static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <ResponsiveContainer width="100%" height="85%">
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
            dataKey="name"
            stroke="#BCBCBC"
            fontSize={13}
            fontWeight={500}
          />
          <YAxis
            dataKey="number"
            style={{ outline: "none" }}
            stroke="#BCBCBC"
            fontSize={14.335}
            fontWeight={400}
          />
          <Bar dataKey="pv" stackId="a" fill="#5932EA" />
          <Bar dataKey="uv" stackId="a" fill="#F2EFFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
