import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const Booking = () => {

    const DataSubmit =
        async values => {
            try {
                await axios.post("https://rjcollection.herokuapp.com/contact", values)

            } catch (error) {
                console.log(error);
            }
            alert("Your Booking has conformed")


        }


    return (
        <div><h1 className='text-bold'>Register for Booking</h1>
            <div className='container  col-sm-12 col-lg-4 text-center'><br />

                <form>
                    <label className='fw-bold'>Name</label>
                    <input type={"text"} name="Name" className="form-control" required />
                    <label className='fw-bold'>Mail Id</label>
                    <input type={"email"} name="Email" className="form-control" required />
                    <label className='fw-bold'>Mobile Number</label>
                    <input type={"text"} name="number" className="form-control" required maxLength={10} />
                    <label className='fw-bold'>Booking Date And Time</label>
                    <input type={"datetime-local"} name="query" className="form-control" />
                    <label className='fw-bold'>End Date And Time</label>
                    <input type={"datetime-local"} name="query" className="form-control" />
                    <label className='fw-bold'>Id Proof</label>
                    <input type={"file"} name="query" className="form-control" />
                    <label className='fw-bold'>Contact Address</label>
                    <input type={"text"} name="query" className="form-control" />
                </form><br />
                <button class="btn btn-primary" type="button" onClick={() => { DataSubmit() }}>Submit</button>
                <Link to={"/products"} class="btn btn-primary m-2" type="button" >Goback</Link>
            </div>
        </div>
    )
}

export default Booking