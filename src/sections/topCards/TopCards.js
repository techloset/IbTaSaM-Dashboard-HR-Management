import React from "react";
import Card from "../../components/Card/Card";
import trendImg from "../../assets/svg/bx_trending-up.svg";
import trendImg1 from "../../assets/svg/bx_trending-down.svg";

export default function TopCards() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-0">
      <Card
        title="Total Employees"
        percent="10.0%"
        trendImg={trendImg}
        perCss="text-_green bg-_bgGreen"
        total="856"
        desi="Employee"
      />
      <Card
        title="Job View"
        percent="22.0%"
        trendImg={trendImg}
        perCss="text-_green bg-_bgGreen"
        total="3,342"
        desi="Viewers"
      />
      <Card
        title="Job Applied"
        percent="12.0%"
        trendImg={trendImg}
        perCss="text-_green bg-_bgGreen"
        total="77"
        desi="Applicants"
      />
      <Card
        cardCss="xl:max-w-[277px]"
        css="w-[277px]"
        title="Resigned Employees"
        percent="7.0%"
        trendImg={trendImg1}
        perCss="text-_danger bg-_bgDanger"
        total="17"
        desi="Employee"
      />
    </div>
  );
}
