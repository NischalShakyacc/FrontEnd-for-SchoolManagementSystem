import Navbar from "./Components/Navbar";
import React, { useEffect, useState } from "react";
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
import ResultList from "./Components/ResultComponents/ResultList";
import Classroom from "./Routes/Admin/Classroom";
import NoticeState from "./context/notices/NoticeState";
import NewAccount from "./Routes/Admin/NewAccount.js"
import UserState from "./context/user/UserState";
import StudentState from "./context/studentinfo/StudentState";
import ProfileStudent from './Routes/Students/ProfileStudent';
import AddResult from "./Components/ResultComponents/AddResult";
import ViewResult from "./Components/ResultComponents/ViewResult";
import ResultState from "./context/results/ResultState";
import StudentView from "./Components/ResultComponents/StudentView";
import EnrollmentReport from "./Components/EnrollmentReport";
import GroupAccount from "./Routes/Admin/GroupAccount";
import GroupResult from "./Routes/Admin/GroupResult";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setIsLoggedIn(true);
    }
  },[localStorage.getItem('token')])
    
  

  return (
    <div className="App">
    <UserState>
    <ResultState>
      <NoticeState>
      <StudentState>
        <Navbar/>
        {isLoggedIn && <SideNavbar/>}
        <div className="containerApp">
          <Routes>

            <Route element={<NewAccount/>} exact path='/newaccount' />

            <Route element={<Profile/>} exact path='/profile' />

            <Route element={<Notice/>} exact path="/notice"/>

            <Route element={<Result/>} exact path="/result"/>
            
            <Route element={<TeacherList/>} exact path="/teacherList" />
            <Route element={<EnrollmentReport/>} exact path="/enrollment" />

            <Route element={<Classroom/>} exact path="/classroom" />
            <Route element={<StudentList/>} path="/classroom/:classID"/>
            <Route element={<ResultList/>} path="/result/:classID"/>

            
            <Route element={<ProfileStudent/>} path="/profilestudent"/>  
            <Route element={<AddResult/>} path="/addresult/:userId/:name"/>  
            <Route element={<ViewResult/>} path="/viewresult/:userId/:name"/>  
            <Route element={<StudentView/>} path="/viewresultstd"/>  
            <Route element={<GroupAccount/>} path="/addgroupaccount"/>  
            <Route element={<GroupResult/>} path="/addgroupresult"/>  

            <Route element={<Home/>} exact path='/' />
            <Route element={<Contact/>} exact path='/contact' />
            <Route element={<Enroll/>}  exact path='/enroll' />
            <Route element={<Login/>}  exact path='/login' />
          </Routes>
        </div>
        </StudentState>
      </NoticeState>
      </ResultState>
      </UserState>
    </div>
  );
}

export default App;
