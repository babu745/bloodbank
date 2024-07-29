import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { login } from '../features/User';


import  Cookies, {Cookie} from 'universal-cookie'

 
import { useNavigate } from "react-router-dom";
 
axios.defaults.withCredentials=true;
const cookies =  new Cookies();

 
function Login() {
  const dispatch =useDispatch();
 

    const navigate=useNavigate();
    const [email,useremail] = useState("");
    const [password,userpassword] = useState("");
    const logdata = {Email:email,Password:password}
    const dname =()=>dispatch(login({name:"mohan"}))
    const logfn = (event) => {
        event.preventDefault();
     
        axios.post( "http://localhost:5000/api/login",logdata,{withCredentials:true})
        .then(res => {
          const tokestring = JSON.stringify(res.data)
          
         console.log(res.data);
         navigate("/profile")
          
         
        } ) 
        .catch(err =>{
          console.log(err.response.data);
        })
          
         
       }
  return (
    <div> 
        <form onSubmit={logfn} >
        <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white"  >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email"
                 id="typeEmailX"
                  class="form-control form-control-lg" 
                  onChange={(event)=>useremail(event.target.value)}/>
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" 
                id="typePasswordX" 
                class="form-control form-control-lg" 
                onChange={(event)=>userpassword(event.target.value)}/>
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              
              <button class="btn btn-outline-light btn-lg px-5" type="button" onClick={dname}>Redux</button>


              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
    </div>
  )
}

export default Login