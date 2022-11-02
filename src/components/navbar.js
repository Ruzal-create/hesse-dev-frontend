import { useEffect, useState } from "react"
import { Link,withRouter } from "react-router-dom"
import { isAuthenticated } from "../helpers/auth"
import {FiMenu} from 'react-icons/fi'
import {TfiClose} from 'react-icons/tfi'
import {CgClose} from 'react-icons/cg'
import Menu from '@mui/material/Menu';
import Cart from '../Media/empty.gif'
import {useSelector, useDispatch} from 'react-redux'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETE, REMOVE } from "../redux/actions/action"
import { red } from '@mui/material/colors';  



const Navbar = () => {

  const getData = useSelector((state)=>state.cartReducer.carts)
  console.log(getData)
  const dispatch = useDispatch()

  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);

  

  console.log(price)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id)=> {
    dispatch(DELETE(id))
  }
  // const rmv = (id) = {
  //   dispatch(REMOVE(id))
  // }

  const total = ()=>{
    let amount = 0;
    getData.map((e,k)=>{
      amount = (Number(e.price)*e.quantity)+amount
    })
    setPrice(amount)
  }

  useEffect(()=>{
    total()
  },[total])
  

	return(
  
  <nav className="w-full flex py-6 justify-between items-center text-black font-['Poppins'] font-semibold tracking-wider">
      <div>
        <span className="w-[124px] h-[32px] pl-2 text-white">Logo</span>
      </div>
      
      {!isAuthenticated() && 
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="cursor-pointer text-[16px] mr-10">
          <Link to="/" >Home</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-10">
          <Link to="/">About</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-10">
          <Link to="/">Contact</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-10">
          <Link to="/signin">Sign</Link>
        </li>
      </ul>
      }
      {isAuthenticated() && isAuthenticated().role === 0 &&
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        <li className="cursor-pointer text-[16px] mr-10">
          <Link to="/user/dashboard">User Dashboard</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-10">
          <Link to="/">About</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-10">
          <Link to="/">Contact</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-20">
            <Badge badgeContent={getData.length} color="primary">
              <ShoppingCartIcon 
              color="action"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              ></ShoppingCartIcon>
            </Badge>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {getData.length ? 
                <TableContainer  >
                  <Table sx={{ minWidth: 350, paddng: 6 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {getData.map((e, i) => (
                        <TableRow
                          key={i}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <img className="w-24" src={e.image1}></img>
                          </TableCell>
                          <TableCell align="right">
                            <p>{e.product_name}</p>
                            <p>Price: ₹{e.price}</p>
                            <p>Quantity: {e.quantity}</p>
                          </TableCell>
                          <TableCell>
                          <DeleteIcon onClick={()=>dlt(e)} sx={{ color: red[500] }}/>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              :
              <div className="flex flex-row w-60 pt-4">
              <CgClose className="absolute top-2 right-2 hover:drop-shadow-md hover:scale-y-105" onClick={handleClose}/>
              <p className="text-center font-['Poppins'] text-red-500 pt-4 pl-4">Your cart is empty</p>
              <img src={Cart} className="w-20"></img>
            </div>
            }
            <p className="text-center">Total: {price} </p>
            
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
        </li>
      </ul>
      }
      {isAuthenticated() && isAuthenticated().role === 1 &&
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        <li className="cursor-pointer text-[16px] mr-10 transition ease-in-out duration-200 hover:drop-shadow-custom hover:scale-y-105">
          <Link to="/hesse/admin/dashboard" className="">Admin Dashboard</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-10 transition ease-in-out duration-200 hover:drop-shadow-custom hover:scale-y-105">
          <Link to="/">About</Link>
        </li>
        <li className="cursor-pointer text-[16px] mr-10 transition ease-in-out duration-200 hover:drop-shadow-custom hover:scale-y-105">
          <Link to="/">Contact</Link>
        </li>
      </ul>
      }



      <div className="flex flex-1 justify-end items-center sm:hidden">
        <div className="pr-2" onClick={()=>setToggle((prev)=>!prev)}>
          {toggle? <TfiClose/>:<FiMenu/>}
        </div>
        {/* <div className={`${toggle? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl`}>
        
        </div> */}
        <div className={`${toggle? 'flex': 'hidden'} absolute top-20 right-0 mx-0 my-2 bg-sky-200 `}>
        

        {!isAuthenticated() &&
          <ul className="sm:flex list-none justify-end items-center flex-1 md:hidden p-4">
          <li className="cursor-pointer text-[16px]">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer text-[16px] mt-2">
            <Link to="/">About</Link>
          </li>
          <li className="cursor-pointer text-[16px] mt-2">
            <Link to="/">Contact</Link>
          </li>
          <li className="cursor-pointer text-[16px] mt-2">
            <Link to="/signin">Sign</Link>
          </li>
        </ul>
        }
        {isAuthenticated() && isAuthenticated().role === 0 &&
          <ul className="sm:flex list-none justify-end items-center flex-1 md:hidden p-4">
          <li className="cursor-pointer text-[16px]">
            <Link to="/user/dashboard">User Dashboard</Link>
          </li>
          <li className="cursor-pointer text-[16px] mt-2">
            <Link to="/">About</Link>
          </li>
          <li className="cursor-pointer text-[16px] mt-2">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        }
        {isAuthenticated() && isAuthenticated().role === 1 &&
          <ul className="sm:flex list-none justify-end items-center flex-1 md:hidden p-4">
          <li className="cursor-pointer text-[16px]">
            <Link to="/user/admin/dashboard">User Dashboard</Link>
          </li>
        </ul>
        }
        
      </div>
        </div>
  </nav>
	)
}

export default Navbar
