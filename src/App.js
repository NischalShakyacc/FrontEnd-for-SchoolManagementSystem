import Navbar from "./Components/Navbar";
import React from "react";
import { Route,Routes } from "react-router";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Enroll from "./Routes/Enroll";
import Login from "./Routes/Login";
import SideNavbar from "./Components/InnerComponents/SideNavbar";
import Profile from './Routes/Admin/Profile';
import Notice from './Routes/Admin/Notice';
import Result from './Routes/Admin/Result';
import StudentList from "./Routes/Admin/StudentList";
import TeacherList from "./Routes/Admin/TeacherList";
import Classroom from "./Routes/Admin/Classroom";
import NoticeState from "./context/notices/NoticeState";
import NewAccount from "./Routes/Admin/NewAccount.js"

function App() {
  return (
    <div className="App">
      <NoticeState>
        <Navbar/>
        <SideNavbar/>
        <div className="containerApp">
          <Routes>
            <Route element={<NewAccount/>} exact path='/newaccount' />
            <Route element={<Profile/>} exact path='/profile' />
            <Route element={<Notice/>} exact path="/notice"/>
            <Route element={<Result/>} exact path="/result"/>
            <Route element={<TeacherList/>} exact path="/teacherList" />
            <Route element={<Classroom/>} exact path="/classroom" />
            <Route element={<StudentList/>} path="/classroom/:classID"/>
            

            <Route element={<Home/>} exact path='/' />
            <Route element={<Contact/>} exact path='/contact' />
            <Route element={<Enroll/>}  exact path='/enroll' />
            <Route element={<Login/>}  exact path='/login' />
          </Routes>
        </div>
      </NoticeState>
    </div>
  );
}

export default App;
