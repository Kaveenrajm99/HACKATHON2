import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
  return (
      <div className='container col-sm-12 col-lg-4 '>
          <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="email" class="form-control" />
    <label class="form-label fw-bold" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="password" class="form-control" />
    <label class="form-label fw-bold" for="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
        <div class="text-center fs-bold">
          <Link to={"/register"} >Register for Admin</Link>
      </div>
</form>
</div>
  )
}

export default Login