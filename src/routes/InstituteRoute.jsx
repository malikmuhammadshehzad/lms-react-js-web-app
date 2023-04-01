import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import InstituteSidebar from '../Screen/InstituteDashboard/InstituteSidebar';
import CourseList from '../Screen/InstituteDashboard/CourseList';
import CourseForm from '../Screen/InstituteDashboard/CourseForm';
import StudentList from '../Screen/InstituteDashboard/Student/StudentsList';
import App from '../Screen/InstituteDashboard/RegistrationControl';

function InstituteRoute() {
  return (
    <>
    <BrowserRouter>
 <Routes>
  
  <Route  path='/' element={ <InstituteSidebar/>}>
  <Route  index element={<CourseList/> }/> 
  <Route exact path='/courseForm' element={<CourseForm/>} />
  <Route exact path='/studentList' element={<StudentList/>} />
  <Route exact path='/registrationForm' element={<App/>} />
  
  </Route>
  
  
 </Routes>
 </BrowserRouter>
 
   </>
  )
}

export default InstituteRoute