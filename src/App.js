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
import AdminModerator from './Components/Dashboard/AdminModerator/AdminModerator';
import Register from './Components/Registration/Register/Register';
import Login from './Components/Registration/Login/Login';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/studentGoals" element={<StudentGoals></StudentGoals>}></Route>
        <Route path="/student/goal/details/:id" element={<StudentGoalDetails>
        </StudentGoalDetails>}></Route>
        <Route path="/addDailyClassWork" element={<AddDailyClassWork></AddDailyClassWork>}></Route>
        <Route path="/assignHomeWork" element={<AssignHomeWork></AssignHomeWork>}></Route>
        <Route path="/updateCompleteLesson" element={<UpdateCompleteLesson></UpdateCompleteLesson>}></Route>
        <Route path="/addAdminModerator" element={<AdminModerator></AdminModerator>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
