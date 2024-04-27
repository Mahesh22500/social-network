import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import { Route, Router, Routes, useLocation } from "react-router-dom";
import MiddlePart from "../../Components/MiddlePart/MiddlePart";
import Reels from "../../Components/Reels/Reels";
import CreateReelsForm from "../../Components/Reels/CreateReelsForm";
import Profile from "../Profile/Profile";
import HomeRight from "../../Components/HomeRight/HomeRight";
import SideBar from "../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../Redux/Auth/auth.action";
const HomePage = () => {
  // const dispatch = useDispatch()
  const location = useLocation();

  // const jwt = localStorage.getItem("jwt");

  const {auth} = useSelector(store=>store);

 

    
  // useEffect(()=>{
  //   dispatch(getProfileAction(jwt))
  // },[jwt])

  console.log("auth user in home is ",auth.user);

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <SideBar ></SideBar>
          </div>
        </Grid>
        <Grid
          lg={location.pathname === "/" ? 6 : 6}
          item
          className="px-5 flex justify-center"
         
        >
          <Routes>
            <Route path="/" element={<MiddlePart />}></Route>
            <Route path="/reels" element={<Reels></Reels>}></Route>
            <Route
              path="/create-reels"
              element={<CreateReelsForm></CreateReelsForm>}
            ></Route>
            <Route path="/profile/:id" element={<Profile></Profile>}></Route>
          </Routes>
        </Grid>

      {location.pathname==='/' && <Grid item lg={3} className="relative">
          <div className="sticky top-0 w-full">
            <HomeRight></HomeRight>
          </div>
        </Grid>
}
      </Grid>
    </div>
  );
};

export default HomePage;
