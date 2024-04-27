import { Avatar, Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../Redux/Post/post.action";
const story = [1, 1, 1, 1, 1];
const posts = [1, 1, 1, 1, 1];

const MiddlePart = () => {

  const [openCreatePostModal,setOpenCreatePostModal]= useState(false);
  
  const handleCloseCreatePostModal=()=>setOpenCreatePostModal(false);




  const handleOpenCreatePostModal = () => {
    setOpenCreatePostModal(true);
    console.log("open post modal");
  };

  const dispatch = useDispatch();

  const {post} = useSelector(store=>store);

  useEffect(()=>{
    dispatch(getAllPostAction())
  },[post.comments])


  return (
    <div className="px-20">
      <section className="flex items-center p-5  rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            // src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg"
          >
            <AddIcon sx={{ fontSize: "3rem" }}></AddIcon>
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item) => (
          <StoryCircle></StoryCircle>
        ))}
      </section>
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar></Avatar>
          <input
            onClick={handleOpenCreatePostModal}
            className="outline-none w-[90%] bg-slate-100 rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
          ></input>
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
            </IconButton>

            <span>media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
            </IconButton>

            <span>video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>

            <span>Write Article</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 spacey-5">
        {post.posts.map((item) => (
          <PostCard item={item}></PostCard>
        ))}
      </div>

      <div>
        <CreatePostModal handleClose={handleCloseCreatePostModal} open={openCreatePostModal}></CreatePostModal>
      </div>
      
    </div>
  );
};

export default MiddlePart;
