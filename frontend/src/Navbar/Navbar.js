import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
import {useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
 
 
 

function Navbar() {

  const [showon,showoff] = useState(true)
  return (
    <div>
 

      <nav class="navbar navbar-expand-lg navbar-light text-light bg-success">
        <div >
          <marquee className='text-dark ' scrollamount='5'><a className="navbar-brand text-dark marq" href="#">TAMILNADU BLOOD BANK</a></marquee>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
         onClick={() => showoff(!showon)} >
          
          {showon ?<MenuIcon/>:<CloseIcon/>}
        </button>
        <div class={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'} id="navbarNav">
          <ul class="navbar-nav  ms-auto">
            <li class="nav-item active">
              <Link to="/home" class="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>Home</Link>
              
            </li>

           <li class="nav-item">
            <Link to="/blooddonor" class="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>BloodDonor</Link>
            </li>
            <li class="nav-item">
            <Link to="/bloodrecipient" class="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>BloodRecipient</Link>
            </li>
            <li class="nav-item">
            <Link to="/login" class="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>Login</Link>
            </li>  
            <li class="nav-item">
            <Link to="/profile" class="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>Profile</Link>
            </li>  
          </ul>
        </div>
      </nav>

<Outlet/>
    </div>
  )
}

export default Navbar;