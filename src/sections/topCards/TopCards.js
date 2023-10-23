import React from "react";
import Card from "../../components/Card/Card";
import trendImg from "../../assets/svg/bx_trending-up.svg";
import trendImg1 from "../../assets/svg/bx_trending-down.svg";

const cardData = [
  {
    title: "Total Employees",
    percent: "10.0%",
    trendImg: trendImg,
    perCss: "text-_green bg-_bgGreen",
    total: "856",
    desi: "Employee",
  },
  {
    title: "Job View",
    percent: "22.0%",
    trendImg: trendImg,
    perCss: "text-_green bg-_bgGreen",
    total: "3,342",
    desi: "Viewers",
  },
  {
    title: "Job Applied",
    percent: "12.0%",
    trendImg: trendImg,
    perCss: "text-_green bg-_bgGreen",
    total: "77",
    desi: "Applicants",
  },
  {
    cardCss: "xl:max-w-[277px]",
    css: "w-[277px]",
    title: "Resigned Employees",
    percent: "7.0%",
    trendImg: trendImg1,
    perCss: "text-_danger bg-_bgDanger flex-shrink-0",
    total: "17",
    desi: "Employee",
  },
];

export default function TopCards() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-0">
      {cardData.map((item) => {
        return (
          <Card
            cardCss={item.cardCss}
            title={item.title}
            percent={item.percent}
            trendImg={item.trendImg}
            perCss={item.perCss}
            total={item.total}
            desi={item.desi}
          />
        );
      })}
    </div>
  );
}
