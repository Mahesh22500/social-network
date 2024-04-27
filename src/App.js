import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import Message from './pages/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Redux/Auth/auth.action';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/DarkTheme';
function App() {


  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  console.log("auth user in app.js is ",auth.user)

  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  },[jwt]
  )
  return (
 <ThemeProvider theme={darkTheme}>
 <div className="">
      <Routes>
     
       <Route path ='/*' element={(auth.user)?<HomePage></HomePage>:<Authentication></Authentication>}></Route>
       <Route path ='/message' element={<Message></Message>}></Route>
       <Route path ='/*' element={<Authentication></Authentication>}></Route>
       
      
       </Routes>

      </div>

 </ThemeProvider>
     
   
  );
}

export default App;
