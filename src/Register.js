import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }
            if (!values.email) {
                errors.email = "Requried";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 8) {
                errors.password = "must be 8 characters"
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://neosmile-crud.herokuapp.com/register', values);
                navigate('/login');
                alert("Successfully Registerd & wait for Admin Confirmation")
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    });
    return (
        <div className="container col-sm-12 col-lg-4 fw-bold">
            <form onSubmit={formik.handleSubmit}>
                <div className="mx-auto flex-column row">
                    <div>
                        <label>Name<span style={{ color: "red" }}>*{formik.errors.name}</span></label>
                        <input
                            type={'text'}
                            name="name"
                            id="name"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div>
                        <label>Email<span style={{ color: "red" }}>*{formik.errors.email}</span></label>
                        <input
                            type={'email'}
                            name="email"
                            id="username"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div>
                        <label>Create Password<span style={{ color: "red" }}>*{formik.errors.password}</span></label>
                        <input
                            type={'password'}
                            name="password"
                            id="password"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div >
                        <input disabled={Object.keys(formik.errors).length !== 0} type={'submit'} className="btn btn-primary mt-2" />



                    </div>
                    <Link to={"/"} className='btn btn-primary m-2 mt-2'>Go Back</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;