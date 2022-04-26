import React from 'react'

const Products = () => {
  return (
    
    <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-10'>
          <section />
            <div class="container px-4 px-lg-5 ">
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col-lg-4 card h-100">
                <div class="badge bg-light text-dark fw-bolder position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}></div>
                <img class="card-img-top mt-2" src="https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDA3fHxtb3RvcmJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                  <h3 class="fw-bolder">Duke200 <br/>
                    <span className='fw-bold fs-5'>
                            Rs : 500 </span>
                  </h3>
                  
                      
                    </div>
              </div>
              
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent ">
                <button className="text-center btn btn-outline-dark mb-2 fw-bold ">Book For Rent/Day </button>
                <button className="text-center btn btn-outline-dark mb-2  fw-bold ">Book For Rent/Month </button>
                  
                </div>

            </div>
      </div> 
      </div>
              </div>
            </div>
          

            
      
  )
}

export default Products