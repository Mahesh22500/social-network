import React, { useEffect, useState } from "react";
import { navigationMenu } from "./SideBarNavigation";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    
    // const dispatch = useDispatch();
    // const jwt = localStorage.getItem("jwt")


    // useEffect(()=>{
    //      getProfileAction(jwt);
    // },[jwt])

    const {auth} = useSelector(store=>store);

    const handleNavigate=(item)=>{
           if(item.title == "Profile")
          { 
            const path = item.path + '/' + auth.user.id;
            console.log("path is ",path)
            navigate(path)
          }
          else 
          {
            console.log("path is ",item.path)
            navigate(item.path)
          }
    }
  
    

    console.log("auth user in sidebar ",auth.user)
  

   

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div className="">
          <span className="logo font-bold text-xl">Mahesh Social</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div onClick={()=>(handleNavigate(item))} className="cursor-pointer flex space-x-3 items-center">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Divider>
         
        </Divider>

        <div className="pl-5 flex items-center justify-between pt-5">
            <div className="flex items-center space-x-3">
              
              <Avatar src="data:image/jpeg;base64,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"></Avatar>
              <div>
            <p className="font-bold">{auth.user?.firstName + " "+ auth.user?.lastName} </p>
            <p className="opacity-70">{auth.user?.firstName.toLowerCase() +" " +  auth.user?.lastName.toLowerCase()}</p>
            </div>
            </div>
            
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <MoreVertIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
            
          </div>
      </div>
    </Card>
  );
};

export default SideBar;
