import React from 'react'
import 'rsuite/dist/rsuite.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CoursesOffered from './Pages/CoursesOffered'
import Assessment from './Pages/Assessment'
import Assignment from './Pages/Assignment'
import Login from './Pages/Login'
import Admission from './Pages/Admission'
import NavBar from './Components/NavBar/NavBar'
import TimeTable from './Pages/TimeTable'
import AssignTutor from './Pages/AssignTutor'
import HeadSB from './Components/SideBar/HeadSB'
import Sidebar from './Components/SideBar/Sidebar'
import Student from './Pages/Student'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/coursesoffered' element={<CoursesOffered />} />
          <Route path='/assessment' element={<Assessment />} />
          <Route path='/assignment' element={<Assignment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/timetable' element={<TimeTable />} />
          <Route path='/assigntutor' element={<AssignTutor />} />
          <Route path='/headsb' element={<HeadSB />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/Student' element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
