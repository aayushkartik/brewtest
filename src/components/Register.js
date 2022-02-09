import React ,{useState} from 'react'
import img1 from '../image/wallpaper.png';
import axios from 'axios'
import Button from '@mui/material/Button';
import './css/register.css';

const Register = () => {
  const[userData,setuserData]= useState({
    name:'',
    email:'',
    password:''
  });
    function updateHandler(event) {
        const Name= event.target.name;
        const val= event.target.value;
        setuserData({...userData ,[Name]:val});
    }
    async function submitHandler(e){
      try{
        e.preventDefault();
        const response = await axios.post('http://localhost:8080/register', userData,{
          withCredentials: true,
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
      });
        console.log(response);
        setuserData({name:"",email:"",password:"",})
      }catch(err){
        console.log(err);
      }
    }
    return (
      <div className="backbody">
      <div className='register-form'>
      <div className='form-outline'>
      <h1 className='brewbim-heading'>Get Started to Brewbim</h1>
      <h5 className='signup-heading' muted={true}>Export 30 emails free, Signup to start</h5>
    <form onSubmit={submitHandler}  autocomplete="off">
        <input
        required
          className='input-fields'
          autoComplete="off"
          value={userData.name}
          label="Name"
          name="name"
          placeholder="Enter your name"
          onChange={updateHandler}
        />
        <br/>
        <input
          required
          className='input-fields'
          autoComplete="off"
          label="Email"
          name="email"
          placeholder="Enter an email"
          value={userData.email}
          onChange={updateHandler}
        />
         <br/>
        <input
          required
          className='input-fields'
          label="Password"
          type="password"
          onChange={updateHandler}
          value={userData.password}
          autoComplete="off"
          placeholder="Set your Password"
          name="password"
        /> <br/>

      <Button variant="outlined" type="submit" className="btnn">Submit</Button>
    </form>
    </div>
    </div>
    </div>
    )
}

export default Register
