import img from "../../assets/images/Ellipse31.jpg";
import more from "../../assets/svg/more-square1.svg";
import svg1 from "../../assets/svg/element-2 1.svg";
import svg2 from "../../assets/svg/chart-square.svg";
import svg3 from "../../assets/svg/personalcard.svg";
import svg4 from "../../assets/svg/briefcase.svg";
import svg5 from "../../assets/svg/user-square.svg";
import svg6 from "../../assets/svg/calendar.svg";
import svg7 from "../../assets/svg/frame.svg";
import svg8 from "../../assets/svg/setting-2.svg";
import SideBarList from "../sideBarList/SideBarList";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const SideBar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-24 top-12 sm:top-4 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
      >
        {show ? (
          <AiOutlineMenu className="w-6 h-6" />
        ) : (
          <AiOutlineClose className="w-6 h-6" />
        )}
      </button>

      <aside
        id="logo-sideba"
        className={`absolute  left-0 z-40 transition-transform -translate-x-full md:translate-x-0 bg-white ${
          show
            ? "hidden md:inline transition-transform"
            : "inline translate-x-0 transition-transform"
        }`}
        aria-label="Sidebar"
      >
        <div className="w-[273px] h-[133vh] xl:h-[892px] overflow-y-auto flex flex-col flex-shrink-0 border-r-[1px] border-_borderColor">
          <a href="#" className="flex items-center justify-around my-8">
            <div className="flex items-center justify-between ml-4">
              <img src={img} className="w-[52px] h-[52px] mr-3" alt="Profile" />
              <div className="flex flex-col">
                <span className="text-black text-[18px] font-[700] leading-normal tracking-[0.18px]">
                  Gavano
                </span>
                <span className="text-_gray text-[13px] font-[400] leading-normal tracking-[0.13px]">
                  HR Manager
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="w-[30.55px] h-[30.55px] relative">
                <img src={more} alt="more" />
              </div>
            </div>
          </a>
          <ul className="space-y-2 font-medium">
            <SideBarList
              classOuterDiv="bg-_lightGray text-_main [&>span]:font-[700] [&>span]:leading-normal [&>span]:tracking-[0.19px]"
              classInnerDiv=""
              svg={svg1}
              svgAlt="icon1"
              heading="Dashboard"
            />

            <SideBarList
              classOuterDiv="hover:bg-_lightGray text-_lightBlack [&>span]:font-[400] [&>span]:leading-normal [&>span]:tracking-[0.19px] [&>div]:hover:inline"
              classInnerDiv="hidden"
              svg={svg2}
              svgAlt="icon2"
              heading="Finance"
            />

            <SideBarList
              classOuterDiv="hover:bg-_lightGray text-_lightBlack [&>span]:font-[400] [&>span]:leading-normal [&>span]:tracking-[0.19px] [&>div]:hover:inline"
              classInnerDiv="hidden"
              svg={svg3}
              svgAlt="icon3"
              heading="Employees"
            />

            <SideBarList
              classOuterDiv="hover:bg-_lightGray text-_lightBlack [&>span]:font-[400] [&>span]:leading-normal [&>span]:tracking-[0.19px] [&>div]:hover:inline"
              classInnerDiv="hidden"
              svg={svg4}
              svgAlt="icon4"
              heading="Company"
            />

            <SideBarList
              classOuterDiv="hover:bg-_lightGray text-_lightBlack [&>span]:font-[400] [&>span]:leading-normal [&>span]:tracking-[0.19px] [&>div]:hover:inline"
              classInnerDiv="hidden"
              svg={svg5}
              svgAlt="icon5"
              heading="Candidate"
            />

            <SideBarList
              classOuterDiv="mb-6 hover:bg-_lightGray text-_lightBlack [&>span]:font-[400] [&>span]:leading-normal [&>span]:tracking-[0.19px] [&>div]:hover:inline"
              classInnerDiv="hidden"
              svg={svg6}
              svgAlt="icon6"
              heading="Calendar"
            />

            <div className="border border-dashed border-_borderGray"></div>

            <SideBarList
              classOuterDiv="mt-6 hover:bg-_lightGray text-_lightBlack [&>span]:font-[400] [&>span]:leading-normal [&>span]:tracking-[0.19px] [&>div]:hover:inline"
              classInnerDiv="hidden"
              svg={svg7}
              svgAlt="icon7"
              heading="Profile"
            />

            <SideBarList
              classOuterDiv="hover:bg-_lightGray text-_lightBlack [&>span]:font-[400] [&>span]:leading-normal [&>span]:tracking-[0.19px] [&>div]:hover:inline"
              classInnerDiv="hidden"
              svg={svg8}
              svgAlt="icon8"
              heading="Setting"
            />
          </ul>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
