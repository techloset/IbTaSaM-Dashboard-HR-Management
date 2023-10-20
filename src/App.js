import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import trendImg from "../src/assets/svg/bx_trending-up.svg";
import circle from "../src/assets/svg/circle.svg";
import TopCards from "./sections/topCards/TopCards";
import JobStatistics from "./sections/JobStatistics/JobStatistics";
import EmployeeStatus from "./sections/employeeStatus/EmployeeStatus";
import EmployeeComposition from "./sections/employeeComposition/EmployeeComposition";

function App() {
  return (
    <>
      <div className="bg-_gbColor">
        <Header />

        <SideBar />

        <div className="p-5 sm:ml-[279px]">
          <TopCards />
          <JobStatistics />

          <div className="xl:flex gap-5">
            <EmployeeStatus />
            <EmployeeComposition />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
