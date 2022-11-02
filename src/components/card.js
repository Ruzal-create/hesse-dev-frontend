import React, {useEffect, useState, useCallback} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {ADD} from "../redux/actions/action";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const ProductCard = ()=>{

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [data, setData] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const send = (e) => {
        dispatch(ADD(e));
    }
    // const ADD = (item)=> {
    //     return{
    //         type: "ADD_CART",
    //         payload: item
    //     }
    // }
    // const increaseCounter = useCallback(() => dispatch(ADD(products[0])), [])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/getProducts')
        .then((res)=>{
            const q = {
                quantity: 0
            }
            const d = res.data.forEach((element,i) => {
                Object.assign(res.data[i], q)
            });
            setProducts(res.data)
        })
        .catch(err=>console.log(err))
    }, [])
    console.log(products)
    return(
       <div className="flex f-row justify-start">
        { products.map((val, index)=>{
            return(
                
                <div className="h-75 p-2" key={index}>
                    <Card sx={{ maxWidth: 250,  margin: "0 auto", padding: "0.1em"}}>
                        <CardMedia
                        component="img"
                        height="110"
                        image={val.image1}
                        alt="product"
                        sx={{ padding: ".5em .5em 0 .5em", objectFit: "contain", height: 210 }}
                        />
                        <CardContent>
                        <div className="font-semibold font-['Poppins']">
                            {val.product_name}
                        </div>
                        <div className="text-sm font-['Poppins']">
                            ₹ {val.price}
                        </div>
                        </CardContent>
                        <CardActions>
                        
                        <div className="w-full flex flex-row justify-evenly">
                            <div>
                                <Button component={Link} to={`/productDetails/${index}`} size="small"><span className="font-['Poppins'] font-semibold">Details</span></Button>   
                            </div>
                            <div>
                                <Button onClick={()=>send(val)} size="small"><span className="font-['Poppins'] font-semibold">Add to cart</span></Button>
                            </div>
                        </div>
                        </CardActions>
                    </Card>
                    
                </div>
                
                
            )
        })}
       </div>
    )
}

export default ProductCard