import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Redux/userReducer';

function Logout() {
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
   const  handleLogout=(e)=>{
        e.preventDefault();
       
        
        dispatch(logout());
    }
    return (
        <div style={{ width: "100%", height: "100vh", backgroundImage: "linear-gradient(#bdc3c7, #2c3e50)" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ backgroundColor:"white", width:"600px", height:"250px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", borderRadius:"10px"}}>

            <h1 style={{ color:"#BBB9B9"}} >Hello {user.name}</h1>
            <h3 style={{ color:"#BBB9B9"}} >Your Email : {user.email }</h3>
            <h3 style={{ color:"#BBB9B9"}} >Your Phone : {user.phone }</h3>
      </div>
            <button  style={{ marginTop:"20px", cursor:"pointer", width: "150px",height: "25px",    border: "none",    borderRadius: "6px" }} onClick={(e)=>handleLogout(e)}>Logout</button>

        </div>
</div>


        
    )

}

export default Logout;