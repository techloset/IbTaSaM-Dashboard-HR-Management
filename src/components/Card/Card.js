const Card = (props) => {
  return (
    <div
      className={`lg:max-w-[450px] xl:max-w-[249px] max-h-[139px] ${props.cardCss} bg-white border-[2px] border-_borderColor rounded-[6px] p-5 flex flex-col justify-center  flex-shrink-0`}
    >
      <div className="flex">
        <h4 className="text-_cardColor text-[16px] font-[700] leading-normal tracking-[0.16px] flex-shrink-0">
          {props.title}
        </h4>
        <span
          className={`ml-3 pl-0.5 pr-1 flex items-center gap-[3px] ${props.perCss} bg-opacity-[0.1] rounded-[50px]`}
        >
          <img src={props.trendImg} alt="Trending Image" />
          <span className="text-[14px] font-[400] leading-normal tracking-[0.14px]">
            {props.percent}
          </span>
        </span>
      </div>
      <h1 className="text-[28px] font-[700] my-1 leading-normal tracking-[0.28px]">
        {props.total}
      </h1>
      <p className="text-_card text-[14px] font-[400] leading-normal tracking-[0.14px]">
        {props.desi}
      </p>
    </div>
  );
};
export default Card;
