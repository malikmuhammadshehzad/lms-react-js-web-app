import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Screen/AdminDashboard/Sidebar";
import InstituteList from "../Screen/AdminDashboard/InstituteList";
 
import InstituteForm from "../Screen/AdminDashboard/InstituteForm";


function AdminRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar/>}>
            <Route  index element={<InstituteList/>} />
            <Route path="/instituteForm" element={<InstituteForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AdminRouter;


 