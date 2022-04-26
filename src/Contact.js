import React from 'react'

const Contact = () => {
    return (
        <div className='container  col-sm-12 col-lg-4 text-center'><br />
            <h1>To Contact For Any Queries</h1><br />
            <form>
                <label className='fw-bold'>Name</label>
                <input type={"text"} name="Name" className="form-control" required/>
                <label className='fw-bold'>Mail Id</label>
                <input type={"email"} name="Email" className="form-control"required />
                <label className='fw-bold'>Mobile Number</label>
                <input type={"text"} name="number" className="form-control"required maxLength={10} />
                <label className='fw-bold'>Query</label>
                <input type={"text"} name="query" className="form-control" />
            </form><br/>
             <button class="btn btn-primary" type="button">Submit</button>
        </div>
    )
}

export default Contact