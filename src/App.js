import React from 'react';
import  { useSelector} from "react-redux";
import { selectUser } from './Redux/userReducer';
import Login from './Login/Login';
import Logout from './Logout/Logout';

function App() {
  const user=useSelector(selectUser);

  return (
    
   <>
   {user?<Logout/>:<Login/>}


   </>
  );
}

export default App;