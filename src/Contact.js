import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            description: ""

        },
        validate: values => {
            const errors = {};

            if (!values.name) {
                errors.name = 'NamePlease';
            }
            else if (!values.email) {
                errors.email = 'Email please';
            }
            else if (!values.number) {
                errors.number = 'Enter Correct Number';
            }
            else if (!values.description) {
                errors.description = 'Enter the uery';
            }
            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post("https://rjcollection.herokuapp.com/catalog", values)

            } catch (error) {
                console.log(error);
            }
            alert("form submitted Have a good day:)"
            )



        },
    })
    return (

        <div className='container fw-bold'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row mt-2'>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type={"text"} name="name" onChange={formik.handleChange}
                            value={formik.values.name} className="form-control" />
                        <span className='text-warning'> {formik.errors.name}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Email</label>
                        <input type={"email"} name="email" onChange={formik.handleChange}
                            value={formik.values.email} className="form-control" />
                        <span className='text-warning'> {formik.errors.email}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Number</label>
                        <input type={"number"} name="number" onChange={formik.handleChange}
                            value={formik.values.number} className="form-control" />
                        <span className='text-warning'> {formik.errors.number}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Description</label>
                        <input type={"text"} name="description" onChange={formik.handleChange}
                            value={formik.values.description} className="form-control" />
                        <span className='text-warning'> {formik.errors.description}</span>
                    </div>




                    <div >
                        <button disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4">submit</button>

                    </div>
                    <NavLink to='/home' className={'btn btn-outline-dark mt-2 '}>Go Back</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Contact