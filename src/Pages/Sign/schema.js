import * as yup from "yup";

export const signUpSchema = yup.object().shape({
	firstName: yup.string().matches(/^[aA-zZ\s]+$/, "Not valid name").required("required"),
	lastName: yup.string().required("required"),
	phoneNo: yup.string().matches(/^[0-9]{10}$/, "Not valid").required("required"),
	email: yup.string().email("Enter a valid email").required('Required'),
	password: yup
		.string()
		.min(5, "Password must be at least 5 characters long")
		.max(25, "Error")
		.required("required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Password must match")
		.required("required"),
})

export const signInSchema = yup.object().shape({
	email: yup.string().email("Enter a valid email").required('Required'),
	password: yup
		.string()
		.min(5, "Password must be at least 5 characters long")
		.max(25, "Error")
		.required("required"),
})

export const addCategorySchema = yup.object().shape({
	category: yup.string().matches(/^[aA-zZ\s]+$/, "Not valid category name").required("required"),
})

export const addProductSchema = yup.object().shape({
	name: yup.string().matches(/^[aA-zZ\s]+$/, "Not a valid name").required("required"),
	description: yup.string().required(),
	price: yup.string().matches(/^[0-9]+$/, "Not a valid price").required("required"),
	category: yup.string().required("required"),
	quantity: yup.string().matches(/^[0-9]+$/, "Not a valid quantity").required("required"),
	image1: yup.string().required("required"),
	image2: yup.string().required("required"),
	image3: yup.string().required("required"),
})