import { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './components/Login/Login';
import useLocalStorageState from 'use-local-storage-state/dist';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateCourse from './components/CreateCourse/CreateCourse';
import StudentRegister from './components/StudentRegister/StudentRegister';
import StudentLog from './components/StudentLog/StudentLog';
import TeacherReg from './components/TeacherReg/TeacherReg';
import TeacherLog from './components/TeacherLog/TeacherLog';
import Shop from './components/Shop/Shop';

export const UserContext = createContext({})

function App() {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState('user', {
    isSignedIn: false,
    username: '',
    role: ''
  })
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard/studentReg">
              <StudentRegister />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/studentLog">
              <StudentLog />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/teacherReg">
              <TeacherReg />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/teacherLog">
              <TeacherLog />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/createCourse">
              <CreateCourse />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/student/showCourse">
              <Shop />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider >
  );
}

export default App;