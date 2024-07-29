import React from 'react'
import {useEffect,useState} from  'react'
import axios from 'axios'


import Cookies from 'universal-cookie';
 
const cook = new Cookies();

function Profile() {
  const hashtoken = JSON.parse( localStorage.getItem('auth'));
  const [od,nd] =useState([])
  const ctoken = JSON.parse(localStorage.getItem("auth"))
  // const tk ={
  //   headers:{ 'auth': 
  //   `${JSON.parse(localStorage.getItem('auth'))}`}
  //  }
 
 
 const t =()=>{
  const tt =cook.get("auth")
 const tts =JSON.stringify(tt)
  
  axios.get("http://localhost:5000/api/getdata" 
  ,

   {
      headers:{ "auth":tts}
     }

   )
  .then(res=>{
     
  nd(res.data)
console.log(od);

})
 
 }
const eee ="my full name"
 
  return (
    
    <div>
    <h1>Profile </h1>  
    <h2>hello{od
  .filter(e => {
    const Bs = e.Name.toLowerCase().includes(eee.toLowerCase());
    
     
     try {
      if(Bs){
        return  Bs;
      }
     
      
     } catch (error) {
      return console.log("no records");
      
     }
     
   
     
     
  })


    .map(e=><div><h1>Name:{e.Name}</h1>
    <h1>Age:{e.Age}</h1>
    </div>)}</h2>
      <button onClick={t}>clidg</button>
      </div>
  )
}

export default Profile;