import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";

const StoryCircle = () => {
  return (
    <div>
         <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          sx={{ width: "5rem", height: "5rem" }}
          src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg"
        >
          {/* <AddIcon sx={{ fontSize: "3rem" }}></AddIcon> */}
         
        </Avatar>
        <p>codewith..</p>
      </div>
    </div>
  )
}

export default StoryCircle
