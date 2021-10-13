import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { login } from "../Redux/userReducer";

function Login() {

  const [loginUser, setUser] = useState({
    name:"",
    email: "",
    phone:"",
    password: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...loginUser,[name]: value });
  };
  const dispatch= useDispatch();
  const handleSubmit = (e) => {
     e.preventDefault();

     dispatch(login({
       name:loginUser.name,
       email:loginUser.email,
       phone:loginUser.phone,
       password:loginUser.password,
       loggedIn:true,
      })
      );
  };
  return (
    <>
    

    <div style={{ width: "100%", height: "100vh", backgroundImage: "linear-gradient(#bdc3c7, #2c3e50)" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      
        <input style={{ cursor:"pointer", width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}} 
                    type="text" value={loginUser.name} onChange={handleInput} placeholder="Enter Your Name" name="name" id="name"
        />
        <br />
        <input style={{ cursor:"pointer", width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}}  
                    type="email" value={loginUser.email} onChange={handleInput} placeholder="Enter Your Email" name="email" id="email"
        />
        <br />

        <input  style={{ cursor:"pointer", width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}} 
                    type="phone" value={loginUser.phone} onChange={handleInput} placeholder="Enter Your Phone Number" name="phone" id="phone"
        />

        <br />
    
        <input style={{ cursor:"pointer", width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}} 
                    type="password" value={loginUser.password} onChange={handleInput} placeholder="Enter Your Password" name="password" id="password"
        />
        <button  onClick={(e)=>handleSubmit(e)} style={{ marginTop:"20px", cursor:"pointer", width: "250px",height: "25px",    border: "none",    borderRadius: "6px" }}   >Login</button>
                 
        
         </div>
</div>

    
    </>
  );
  
}



export default Login;