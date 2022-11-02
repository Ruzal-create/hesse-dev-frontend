import { Button } from "@mui/material";
import Navbar from "../components/navbar";
import {AddCategory, AddProduct, ViewOrders} from "../components/modal";
import AddIcon from '@mui/icons-material/Add';
import TableViewIcon from '@mui/icons-material/TableView';
import axios from "axios";

const AdminDashboard = ()=> {

    

    return(
        
        <div className="h-screen bg-gradient-to-r 
        from-blue-400 
        to-orange-500 
        via-purple-500
        animate-gradient-x">
            <Navbar/>
            
                <div className="flex justify-center pt-12 font-['Montserrat'] text-white text-4xl font-black tracking-wider drop-shadow-custom">
                    <div>Dashboard</div>
                </div>
            
                <div className="gap-y-6 flex justify-center flex-col sm:gap-x-8  pt-40 sm:flex-row">
                    <div className="">
                        <AddCategory/>
                    </div>
                    <div className="">
                        <AddProduct/>
                    </div>
                    <div>
                        <ViewOrders/>
                    </div>
                </div>
        </div>
    )
}

export default AdminDashboard;