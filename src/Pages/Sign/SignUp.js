import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import image2 from './image2.png'
import {useFormik} from 'formik';
import {Link, useNavigate} from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton';
import {signUpSchema} from './schema';
import { isAuthenticated } from '../../helpers/auth';
import Axios from 'axios';


const SignUp = () => {

	const [load, setload] = useState(false)
	const [err, setError] = useState(null)
	const navigate = useNavigate();
	useEffect(()=>{
		if(isAuthenticated() && isAuthenticated().role === 1){
			navigate('/hesse/admin/dashboard')
		}else if(isAuthenticated() && isAuthenticated().role === 0){
			navigate('/user/dashboard')
		}
	}, [navigate])

	const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNo: "",
			password: "",
			confirmPassword: ""
		},
		validationSchema: signUpSchema,
		onSubmit: async (values) => {
			try{
				console.log(values)
				await Axios.post('http://localhost:5000/api/register',{
					fname: values.firstName,
					lname: values.lastName,
					email: values.email,
					phone: values.phoneNo,
					password: values.password
				});
				navigate('/');
			}
			catch(error){
				setError(error.response.data)
			}
			
			// console.log(values)
		}
	});
	// className="rounded-3xl bg-white shadow-3xl h-auto w-10/12 md:h-auto md:w-5/12 opacity-95"
	//style={{backgroundImage: `url(${image})`}}
	return(
		<div className="flex items-center justify-center h-screen flex-col bg-ghostwhite">
			<div><img className="w-44" src={image2}/></div>
			<div className="backdrop-blur-lg bg-white rounded-t-2xl border-bordercolor h-auto w-10/12 md:h-auto md:w-5/12">
				<div className="flex items-center justify-center h-full flex-col pt-4 pb-4 gap-4">
					<div className="font-worksans text-2xl font-semibold">
						Signup
					</div>
					<div className="">
						<TextField 
							sx={{width: 300, color: 'white'}} name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur}
						 	error={touched.firstName && errors.firstName? true:false}
						 	helperText={touched.firstName && errors.firstName? errors.firstName:null}
						 	id="outlined-basic" label="First Name" variant="outlined"
						 	size="small"
						 />
					</div>
					<div>
						<TextField sx={{width: 300}} name="lastName" label="Last Name" variant="outlined" onBlur={handleBlur} 
						 	value={values.lastName} onChange={handleChange}	
						 	error={touched.lastName && errors.lastName? true:false}
						 	helperText={touched.lastName && errors.lastName? errors.lastName:null}
						 	size="small"
						/>
					</div>
					<div>
						<TextField sx={{width: 300}} name="email" id="outlined-basic" label="Email" type="email" variant="outlined" onBlur={handleBlur}
						 error={touched.email && errors.email? true:false}
						 helperText={touched.email && errors.email? errors.email:null}
						 value={values.email} onChange={handleChange}
						 size="small"
						/>
					</div>
					<div>
						<TextField sx={{width: 300}} name="phoneNo" id="outlined-basic" label="Phone number" type="string" variant="outlined" onBlur={handleBlur}
						 error={touched.phoneNo && errors.phoneNo? true:false}
						 helperText={touched.phoneNo && errors.phoneNo? errors.phoneNo:null}
						value={values.phoneNo} onChange={handleChange}	
			            size="small"
						/>
					</div>
					<div>
						<TextField sx={{width: 300}} name="password" id="outlined-basic" label="Create Password" type="password" variant="outlined" onBlur={handleBlur}
						 error={touched.password && errors.password? true:false}
						 helperText={touched.password && errors.password? errors.password:null}
						value={values.password} onChange={handleChange}	
			            size="small"
						/>
					</div>
					<div>
						<TextField value={values.confirmPassword} name="confirmPassword" onChange={handleChange} sx={{width: 300}} label="Confirm Password" type="password" variant="outlined" onBlur={handleBlur}
						 error={touched.confirmPassword && errors.confirmPassword? true:false}
						 helperText={touched.confirmPassword && errors.confirmPassword? errors.confirmPassword:null}
						 size="small"
						/>
					</div>
					<div>
						<LoadingButton
							sx={{width: 300}} variant="contained" type="submit" loading={load} onClick={handleSubmit} >Register
						</LoadingButton>
					</div>
					<div>
						{err && <p className='text-sm text-red-500'>{err}</p>}
					</div>

					<div>
						<p>Already have an account? <span className='text-cyan-500'><Link to=''>Log In</Link></span></p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default SignUp;