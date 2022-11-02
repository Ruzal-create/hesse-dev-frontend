import './index.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/nav'
import axios from 'axios';
import Home from './Pages/Home'
import About from './Pages/About'
import SignUp from './Pages/Sign/SignUp'
import SignIn from './Pages/Sign/SignIn'
import UserDashboard from './Pages/UserDashboard'
import AdminDashboard from './Pages/AdminDashboard'
import {AdminRoute, UserRoute} from './components/AdminRoute';
import ProductDetails from './Pages/ProductDetails';
import PageError from './Pages/404'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/productDetails/:productID" element={<ProductDetails/>} />
        <Route element={<UserRoute/>}>
          <Route path='/user/dashboard' element={<UserDashboard/>}></Route>
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path='/hesse/admin/dashboard' element={<AdminDashboard/>}></Route>
        </Route>
  
      </Routes>
    </>
  );
}

export default App;