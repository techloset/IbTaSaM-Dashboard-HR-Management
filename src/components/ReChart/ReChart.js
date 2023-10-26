import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  const topBorderRadius = fill === "#F2EFFF" ? 8 : 0;

  return (
    <path
      fill={fill}
      d={`
        M ${x},${y + topBorderRadius}
        L ${x},${y + height}
        L ${x + width},${y + height}
        L ${x + width},${y + topBorderRadius}
        Q ${x + width},${y} ${x + width - topBorderRadius},${y}
        L ${x + topBorderRadius},${y}
        Q ${x},${y} ${x},${y + topBorderRadius}
      `}
    />
  );
};

const renderCustomBar = (props) => {
  const { x, y, width, height, fill, dataKey } = props;
  const borderRadius = fill === "#5932EA" ? "8px" : "0";

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={10}
        ry={borderRadius}
      />
    </g>
  );
};

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
            tick={<CustomizedXAxisTick />}
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
          <Bar
            dataKey="dark"
            stackId="a"
            fill="#5932EA"
            shape={renderCustomBar}
          />
          <Bar dataKey="lite" stackId="a" fill="#F2EFFF" shape={CustomBar} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const CustomizedXAxisTick = (props) => {
  const { x, y, payload } = props;
  const isAug = payload.value === "Aug";
  const textStyle = {
    fontSize: 13,
    fontWeight: isAug ? "bold" : 500,
    fill: isAug ? "black" : "#BCBCBC",
  };

  return (
    <text
      x={x}
      y={y}
      dy={16}
      textAnchor="middle"
      fill={textStyle.fill}
      fontSize={textStyle.fontSize}
      fontWeight={textStyle.fontWeight}
    >
      {payload.value}
    </text>
  );
};
