import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import TopCards from "./sections/topCards/TopCards";
import JobStatistics from "./sections/JobStatistics/JobStatistics";
import EmployeeStatus from "./sections/employeeStatus/EmployeeStatus";
import EmployeeComposition from "./sections/employeeComposition/EmployeeComposition";

function App() {
  return (
    <div className="bg-_gbColor">
      <Header />

      <SideBar />

      <div className="p-5 md:ml-[279px]">
        <TopCards />
        <JobStatistics />

        <div className="xl:flex gap-5">
          <EmployeeStatus />
          <EmployeeComposition />
        </div>
      </div>
    </div>
  );
}

export default App;
