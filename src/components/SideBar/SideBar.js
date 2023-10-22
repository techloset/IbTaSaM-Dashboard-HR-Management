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
const SideBar = () => {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="absolute right-24 top-12 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="absolute  left-0 z-40 transition-transform -translate-x-full sm:translate-x-0 bg-white"
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
