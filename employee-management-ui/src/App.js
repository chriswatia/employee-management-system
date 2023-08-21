import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import NavBarComponent from "./components/NavBarComponent";
import EmployeeListComponent from "./components/EmployeeListComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route index element={<EmployeeListComponent/>} />
          <Route path="/" element={<EmployeeListComponent/>}/>
          <Route path="/employeeList" element={<EmployeeListComponent/>}/>
          <Route path="/addEmployee" element={<AddEmployeeComponent/>}/>
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
