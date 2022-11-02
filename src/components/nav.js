// {!isAuthenticated() && 
//     <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//     <li className="cursor-pointer text-[16px] mr-10">
//       <Link to="/" >Home</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10">
//       <Link to="/">About</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10">
//       <Link to="/">Contact</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10">
//       <Link to="/signin">Sign</Link>
//     </li>
//   </ul>
//   }
//   {isAuthenticated() && isAuthenticated().role === 0 &&
//     <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//     <li className="cursor-pointer text-[16px] mr-10">
//       <Link to="/user/dashboard">User Dashboard</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10">
//       <Link to="/">About</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10">
//       <Link to="/">Contact</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10">
//       <FaShoppingCart></FaShoppingCart>
//     </li>
//   </ul>
//   }
//   {isAuthenticated() && isAuthenticated().role === 1 &&
//     <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//     <li className="cursor-pointer text-[16px] mr-10 transition ease-in-out duration-200 hover:drop-shadow-custom hover:scale-y-105">
//       <Link to="/hesse/admin/dashboard" className="">Admin Dashboard</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10 transition ease-in-out duration-200 hover:drop-shadow-custom hover:scale-y-105">
//       <Link to="/">About</Link>
//     </li>
//     <li className="cursor-pointer text-[16px] mr-10 transition ease-in-out duration-200 hover:drop-shadow-custom hover:scale-y-105">
//       <Link to="/">Contact</Link>
//     </li>
//   </ul>
//   }



//   <div className="flex flex-1 justify-end items-center sm:hidden">
//     <div className="pr-2" onClick={()=>setToggle((prev)=>!prev)}>
//       {toggle? <TfiClose/>:<FiMenu/>}
//     </div>
//     {/* <div className={`${toggle? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl`}>
    
//     </div> */}
//     <div className={`${toggle? 'flex': 'hidden'} absolute top-20 right-0 mx-0 my-2 bg-sky-200 `}>
    

//     {!isAuthenticated() &&
//       <ul className="sm:flex list-none justify-end items-center flex-1 md:hidden p-4">
//       <li className="cursor-pointer text-[16px]">
//         <Link to="/">Home</Link>
//       </li>
//       <li className="cursor-pointer text-[16px] mt-2">
//         <Link to="/">About</Link>
//       </li>
//       <li className="cursor-pointer text-[16px] mt-2">
//         <Link to="/">Contact</Link>
//       </li>
//       <li className="cursor-pointer text-[16px] mt-2">
//         <Link to="/signin">Sign</Link>
//       </li>
//     </ul>
//     }
//     {isAuthenticated() && isAuthenticated().role === 0 &&
//       <ul className="sm:flex list-none justify-end items-center flex-1 md:hidden p-4">
//       <li className="cursor-pointer text-[16px]">
//         <Link to="/user/dashboard">User Dashboard</Link>
//       </li>
//       <li className="cursor-pointer text-[16px] mt-2">
//         <Link to="/">About</Link>
//       </li>
//       <li className="cursor-pointer text-[16px] mt-2">
//         <Link to="/">Contact</Link>
//       </li>
//     </ul>
//     }
//     {isAuthenticated() && isAuthenticated().role === 1 &&
//       <ul className="sm:flex list-none justify-end items-center flex-1 md:hidden p-4">
//       <li className="cursor-pointer text-[16px]">
//         <Link to="/user/admin/dashboard">User Dashboard</Link>
//       </li>
//     </ul>
//     }
    
//     </div>
//     </div>