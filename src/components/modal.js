import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide'
import { Link } from 'react-router-dom';
import {useFormik} from 'formik';
import axios from 'axios';
import { addCategorySchema, addProductSchema } from '../Pages/Sign/schema';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import { deleteCookie, getCookie } from '../helpers/cookies';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

//Add category
export const AddCategory=()=> {
  const [open, setOpen] = React.useState(false);
  const [err, setError] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      category: "",
        
    },
    validationSchema: addCategorySchema,
    onSubmit: async (values) => {
        try{
            console.log(values)
            await axios.post('http://localhost:5000/api/addCategory',{
                category_name: values.category,
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
            // <Snackbar open={true} autoHideDuration={600} >
            //     <Alert severity="success" sx={{ width: '100%' }}>
            //         This is a success message!
            //     </Alert>
            // </Snackbar>
        }
        catch(error){
            setError(error.response.data)
        }
        
        // console.log(values)
    }
    
  });
  return (
    <div>
      <Link to="" class="relative inline-block px-5 py-2 font-medium group" onClick={handleClickOpen}>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">Add category</span>
    </Link>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle><span className="font-bold font-['Montserrat']">Add category</span></DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            <span className='font-[Poppins] font-semibold'>Enter category to add</span>
          </DialogContentText> */}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            error={touched.category && errors.category? true:false}
            helperText={touched.category && errors.category? errors.category:null}
            autoFocus
            margin="dense"
            id="category"
            label="Enter category"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}><span className="font-bold font-['Montserrat'] text-red-500 transition ease-in-out duration-200 hover:drop-shadow hover:scale-y-105">Cancel</span></Button>
          <Button onClick={handleSubmit}><span className="font-bold font-['Montserrat'] text-green-500 transition ease-in-out duration-200 hover:drop-shadow hover:scale-y-105">Add</span></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export const AddProduct =()=> {

  const [categoryData, setCategoryData] = useState([])
  const [err, setError] = useState(null)
  React.useEffect(()=>{
    axios.get('http://localhost:5000/api/getCategories')
    .then(res=>{
      setCategoryData(res.data)
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
      image1: "",
      image2: "",
      image3: "",
      category_name: ""
    },
    validationSchema: addProductSchema,
    onSubmit: async (values) => {
        try{
            console.log(values)

            const val = ()=>{for(var i in categoryData){
              if(categoryData[i].cid == values.category){
                return i
              }}}
  
            await axios.post('http://localhost:5000/api/addProducts',{
              name: values.name,
              description: values.description,
              price: values.price,
              cid: values.category,
              quantity: values.quantity,
              image1: values.image1,
              image2: values.image2,
              image3: values.image3,
              category_name: categoryData[val()].category_name
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        }
        catch(error){
            // setError(error.response.data)
            console.log(error)
        }
        
        // console.log(values)
    }
    
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Link to="" class="relative inline-block px-5 py-2 font-medium group" onClick={handleClickOpen}>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">Add product</span>
    </Link>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle><span className="font-semibold font-['Montserrat']">Add Product</span></DialogTitle>
        <DialogContent>
  
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Product name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && errors.name? true:false}
            helperText={touched.name && errors.name? errors.name:null} 
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Product Description"
            type="text"
            multiline
            rows={4}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={touched.description && errors.description? true:false}
            helperText={touched.description && errors.description? errors.description:null}
            fullWidth
            
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Product Price"
            type="text" 
            sx={{ mr:1, width: '31ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            error={touched.price && errors.price? true:false}
            helperText={touched.price && errors.price? errors.price:null}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            select
            label="Category"
            type="text" 
            defaultValue=""
            sx={{ ml: 1, width: '31ch' }}
            onChange={handleChange("category")}
            onBlur={handleBlur("category")}
            value={values.category}
            error={touched.category && errors.category? true:false}
            helperText={touched.category && errors.category? errors.category:null}
          >
            {categoryData.map((option) => (
              <MenuItem key={option.cid} value={option.cid}>
                {option.category_name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Quantity"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
            error={touched.quantity && errors.quantity? true:false}
            helperText={touched.quantity && errors.quantity? errors.quantity:null} 
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="image1"
            label="Image 1 link"
            type="text" 
            size="small"
            sx={{ mr: 1, width: '20ch' }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image1}
            error={touched.image1 && errors.image1? true:false}
            helperText={touched.image1 && errors.image1? errors.image1:null}
          />
          <TextField
            autoFocus
            margin="dense"
            id="image2"
            label="Image 2 link"
            type="text" 
            size="small"
            sx={{ mr: 1,ml:1, width: '20ch' }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image2}
            error={touched.image2 && errors.image2? true:false}
            helperText={touched.image2 && errors.image2? errors.image2:null}
          />
          <TextField
            autoFocus
            margin="dense"
            id="image3"
            label="Image 3 link"
            type="text" 
            size="small"
            sx={{ ml: 1, width: '20ch' }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image3}
            error={touched.image3 && errors.image3? true:false}
            helperText={touched.image3 && errors.image3? errors.image3:null}
          />

          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}><span className="font-bold font-['Montserrat'] text-red-500">Cancel</span></Button>
          <Button onClick={handleSubmit}><span className="font-bold font-['Montserrat'] text-green-500">Add</span></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export const ViewOrders=()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link to="" class="relative inline-block px-5 py-2 font-medium group" onClick={handleClickOpen}>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">View Orders</span>
    </Link>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle><span className="font-semibold font-['Montserrat']">View Orders</span></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span className='font-[Poppins]'>List the orders</span>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
