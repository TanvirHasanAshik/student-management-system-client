import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import StudentGoals from './Components/Dashboard/StudentGoals/StudentGoals';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentGoalDetails from './Components/StudentGoalDetails/StudentGoalDetails';
import AddDailyClassWork from './Components/Dashboard/AddDailyClassWork/AddDailyClassWork';
import AssignHomeWork from './Components/Dashboard/AssignHomeWork/AssignHomeWork';
import UpdateCompleteLesson from './Components/Dashboard/UpdateCompleteLesson/UpdateCompleteLesson';
import AdminModeratorAdd from './Components/Dashboard/AdminModeratorAdd/AdminModeratorAdd';
import Register from './Components/Registration/Register/Register';
import Login from './Components/Registration/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddStudentInformation from './Components/Dashboard/AddStudentInformation/AddStudentInformation';
import AdminModeratorList from './Components/Dashboard/AdminModeratorList/AdminModeratorList';
import AdminModeratorUpdate from './Components/Dashboard/AdminModeratorUpdate/AdminModeratorUpdate';
import StudentDashboard from './Components/Dashboard/StudentDashboard/StudentDashboard';
import UpdateStudentInformation from './Components/Dashboard/UpdateStudentInformation/UpdateStudentInformation';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}></Route>

        <Route path="/studentGoals" element={<StudentGoals></StudentGoals>}></Route>

        <Route path="/student/goal/details/:id" element={<StudentGoalDetails>
        </StudentGoalDetails>}></Route>

        <Route path="/addDailyClassWork" element={<AddDailyClassWork></AddDailyClassWork>}></Route>

        <Route path="/assignHomeWork" element={<AssignHomeWork></AssignHomeWork>}></Route>

        <Route path="/updateCompleteLesson" element={<UpdateCompleteLesson></UpdateCompleteLesson>}></Route>

        <Route path="/addAdminModerator" element={<AdminModeratorAdd></AdminModeratorAdd>}>
        </Route>

        <Route path="/showAdminModerator" element={<AdminModeratorList></AdminModeratorList>}></Route>

        <Route path="/addStudent" element={<AddStudentInformation></AddStudentInformation>}></Route>

        <Route path="/updateAdminInformation/:id" element={<AdminModeratorUpdate>
        </AdminModeratorUpdate>}></Route>

        <Route path="/updateStudentInformation/:id" element={<UpdateStudentInformation></UpdateStudentInformation>}>
        </Route>

        <Route path='/studentDashboard' element={<StudentDashboard></StudentDashboard>}>
        </Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
