import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter ,Routes,Route}  from 'react-router-dom'
import Home from './padge/Home';
import BloodDonor from './padge/BloodDonor';
import BloodRecipient from './padge/BloodRecipient';
import Profile from './padge/Profile';
import Login from './padge/Login';
import Protect from './padge/Protect';
import {useSelector} from 'react-redux'

function App() {
  const  user = useSelector(state=>state.user.value);
  return    <div  >
      
      <h1>hello redux{user.name}</h1>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blooddonor' element={<BloodDonor/>}/>
          <Route path='/bloodrecipient' element={<BloodRecipient/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route  element={<Protect/>}>
          <Route path='/profile' element={<Profile/>}/>
          </Route>
         
        </Routes>
        </BrowserRouter>
        
    </div>
  
}

export default App;
