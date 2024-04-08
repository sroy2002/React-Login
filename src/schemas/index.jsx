import * as Yup from 'yup';
export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(15).required("Name is required!"),
    username: Yup.string().min(4).max(10).required('Username is required!'),
    email:Yup.string().email('Invalid Email Address!').required("Email is required!"),
    password: Yup.string().min(6).required("Password is required!"),
    checkbox: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('You must accept the terms and conditions'),
});