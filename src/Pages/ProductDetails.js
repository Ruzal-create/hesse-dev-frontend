import {useParams} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import Carousel from 'react-material-ui-carousel'
import {ClockLoader} from 'react-spinners'
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import {useDispatch} from 'react-redux'
import {INCREASE_CART} from "../redux/actions/action";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import {MdAddShoppingCart} from 'react-icons/md'

const ProductDetails = ()=> {
    const [quantity, setQuantity] = useState(1)
    const [products, setProducts] = useState([{}])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    // useEffect(()=>{
    //     axios.get('http://localhost:5000/api/getProducts')
    //     .then((res)=>{
    //         setProducts(res.data)
    //         setLoading(false)
    //     })
    //     .catch(err=>console.log(err))
    // }, [])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/getProducts')
        .then((res)=>{
            console.log(res)
            const q = {
                quantity: 1
            }
            const d = res.data.forEach((element,i) => {
                Object.assign(res.data[i], q)
            });
            setProducts(res.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    }, [])
    console.log(products)

    const dispatch = useDispatch();
    const send = (item, num) => {
        handleClick();
        dispatch(INCREASE_CART(item, num))
        
        
    }

    const params = useParams();
    if(loading) return <div className="h-screen flex justify-center items-center">
        <span><ClockLoader size="80" color="#36d7b7" /></span>
    </div>
    const {image1, image2, image3} = products[params.productID]
    const imageLink = [
        image1,
        image2,
        image3
    ]
    
   
    
    return(
        <div className="h-screen w-full flex flex-row justify-evenly items-center">
            <div className=''>
                <Carousel className='w-96'>
                    {imageLink.map((item, key)=>(
                        <Box
                        component="img"
                        sx={{
                            padding: ".5em .5em 0 .5em",margin: "0 auto", objectFit: "contain", height: 405, width: 500
                        }}
                        src={item}
                        alt="img"
                    />
                    ))}
                </Carousel>
            </div>
            <div className='w-96 flex flex-col pb-16 space-y-5'>
                <div className="space-y-2">
                    <div>
                        <span className="font-['Lora'] font-semibold text-3xl">{products[params.productID].product_name}</span>
                    </div>
                    <div>
                        <span className="font-['Poppins'] font-semibold text-2xl">₹ {products[params.productID].price}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <span className="font-['Poppins'] text-base">{products[params.productID].product_description}</span>
                    </div>
                    <div>
                        <Chip style={{fontFamily:"Poppins"}} label={products[params.productID].category_name} clickable />
                    </div>
                </div>
                <div className="pt-4">
                    <span className="font-['Poppins'] font-semibold">Quantity </span>
                    <span onClick={()=>setQuantity(c => Math.max(c - 1, 1))} class="cursor-pointer relative px-6 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                        <span class="absolute bottom-0 left-0 h-full -ml-2">
                        <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                        </span>
                        <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                        <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                        </span>
                        <span class="relative font-bold text-xl">-</span>
                    </span>
                    <span className="font-['Poppins'] px-4">{quantity}</span>
                    <span  onClick={()=>setQuantity(quantity+1)} class="cursor-pointer relative px-6 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                        <span class="absolute bottom-0 left-0 h-full -ml-2">
                        <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                        </span>
                        <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                        <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                        </span>
                        <span class="relative font-bold text-xl">+</span>
                    </span>
                </div>
                <div className="pt-8">
                
                <span onClick={()=>send(products[params.productID], quantity)} class="w-full cursor-pointer px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                    <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span class="relative">Add to cart</span>
                </span>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Items added to cart
                </Alert>
                </Snackbar>
                </div>
                
            </div>
        </div>
    )

}

export default ProductDetails;