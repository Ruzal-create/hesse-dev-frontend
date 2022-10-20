import './index.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import SignUp from './Pages/Sign/SignUp'
import SignIn from './Pages/Sign/SignIn'
import UserDashboar from './Pages/UserDashboard'
import AdminDashboard from './Pages/AdminDashboard'
import PageError from './Pages/404'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/user/dashboard" element={<UserDashboar/>} />
        <Route path="/hesse/admin/dashboard" element={<AdminDashboard/>} />
      </Routes>
    </>
  );
}

export default App;