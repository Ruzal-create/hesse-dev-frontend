import * as yup from "yup";

export const signUpSchema = yup.object().shape({
	firstName: yup.string().matches(/^[aA-zZ\s]+$/, "Not valid name").required("Required"),
	lastName: yup.string().required("Required"),
	phoneNo: yup.string().matches(/^[0-9]{10}$/, "Not valid").required("Required"),
	email: yup.string().email("Enter a valid email").required('Required'),
	password: yup
		.string()
		.min(5, "Password must be at least 5 characters long")
		.max(25, "Error")
		.required("Required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Password must match")
		.required("Required"),
})

export const signInSchema = yup.object().shape({
	email: yup.string().email("Enter a valid email").required('Required'),
	password: yup
		.string()
		.min(5, "Password must be at least 5 characters long")
		.max(25, "Error")
		.required("Required"),
})

