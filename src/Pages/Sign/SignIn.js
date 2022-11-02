import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import image2 from './image2.png'
import {useFormik} from 'formik';
import {Link, useNavigate} from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton';
import { signInSchema } from './schema';
import Axios from 'axios';
import { setAuthentication, isAuthenticated } from '../../helpers/auth';


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
	}, [])

	const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: signInSchema,
		onSubmit: async(values) => {
			setload(true)
			await Axios.post('http://localhost:5000/api/login',{
				email: values.email,
				password: values.password
			})
			.then(response=>{
			// setAuthentication(response)
				setAuthentication(response.data.token, response.data.user);
				if(isAuthenticated() && isAuthenticated().role === 1){
					navigate('/hesse/admin/dashboard')
				}else{
					navigate('/user/dashboard')
				}
				setError(null)
			})
			.catch(error=>{
				setError(error.response.data);
				setload(false)
			})
		}
	});

	//style={{backgroundImage: `url(${image})`}}
	return(
		<div className="flex items-center justify-center h-screen flex-col h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 animate-gradient-x">
			<div><img className="w-44" src={image2}/></div>
			<div className="rounded-3xl bg-white shadow-3xl h-auto w-10/12 md:h-auto md:w-5/12 opacity-95">
				<div className="flex items-center justify-center h-full flex-col pt-4 pb-4 gap-4">
					<div className="font-worksans text-2xl font-semibold">
						Sign In
					</div>
					<div>
						<TextField sx={{width: 300}} name="email" id="outlined-basic" label="Email" type="email" variant="outlined" onBlur={handleBlur}
						 error={touched.email && errors.email? true:false}
						 helperText={touched.email && errors.email? errors.email:null}
						 value={values.email} onChange={handleChange}
						/>
					</div>
					<div>
						<TextField sx={{width: 300}} name="password" id="outlined-basic" label="Create Password" type="password" variant="outlined" onBlur={handleBlur}
						 error={touched.password && errors.password? true:false}
						 helperText={touched.password && errors.password? errors.password:null}
						 value={values.password} onChange={handleChange}	
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

				</div>
			</div>
		</div>
	)
}

export default SignUp;