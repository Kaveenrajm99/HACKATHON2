import React from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'




const Register = () => {

    const DataSubmit =
        async values => {
            try {
                await axios.post("https://rjcollection.herokuapp.com/contact", values)

            } catch (error) {
                console.log(error);
            }
            alert("Successfully Registered")


        }

    return (
        <div className='container col-sm-12 col-lg-4 '>
            <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-2">
                    <label class="form-label fw-bold" for="form2Example1">Name</label>
                    <input type="text" id="name" class="form-control" />

                </div>
                <div class="form-outline mb-2">
                    <label class="form-label fw-bold" for="form2Example1">Email address</label>
                    <input type="email" id="email" class="form-control" />

                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-2">
                    <label class="form-label fw-bold" for="form2Example2">Password</label>
                    <input type="password" id="password" class="form-control" />

                </div>
                <div class="form-outline mb-2">
                    <label class="form-label fw-bold" for="form2Example2">Conform Password</label>
                    <input type="password" id="password" class="form-control" />

                </div>



                {/* <!-- Submit button --> */}
                <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => { DataSubmit() }}>Register</button>

                {/* <!-- Register buttons --> */}
                <div class="text-center fs-bold">
                    <Link to={"/login"} className='text-bold fw-2'>Go Back</Link>
                </div>
            </form>
        </div>
    )
}

export default Register