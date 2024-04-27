import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../Components/Post/PostCard";
import UserReelsCard from "../../Components/Reels/UserReelsCard";
import { getUsersPostAction } from "../../Redux/Post/post.action";
import { useDispatch, useSelector } from "react-redux";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1, 1];



const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = useState("post");
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {post} = useSelector(source=>source);

  useEffect(()=>{
    dispatch(getUsersPostAction(id))
  },[])

  return (
    <Card className="my-10 w-[100%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full  rounded-t-md"
            src="https://cdn.pixabay.com/photo/2023/12/07/19/45/tiger-8436227_1280.jpg"
            alt=""
          ></img>
        </div>

        <div className="px-5 flex justify-between items-start mt-5 h-[5-rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://userpic.codeforces.org/2135103/title/8b7b331a00a98d87.jpg"
          ></Avatar>
          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>

        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">Code with Mahesh</h1>
            <p>@codewithmahesh</p>
          </div>

          <div className="flex gap-2 items-center py-3">
            <span>41 post</span>
            <span>32 followers</span>
            <span> 5 followings </span>
          </div>

          <div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nostrum velit doloribus, quisquam distinctio perferendis.
              Exercitationem sit explicabo illo vitae!
            </p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => {
                return <Tab value={item.value} label={item.name} wrapped />;
              })}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {/* {posts.map((item) => (
                  <div className="border border-slate-100 rouded-md">
                    <PostCard ></PostCard>
                  </div>
                ))} */}
                {
                  post.posts.map((item)=>
                    <div className="border border-slate-100 rouded-md">
                    <PostCard item={item}></PostCard>
                  </div>
                  )
                  }
                
              </div>
            ) : value === "reels" ? (
              <div className="">
                <div className="flex  flex-wrap gap-2 my-10 px-20">
                  {reels.map((item) => {
                    return <UserReelsCard></UserReelsCard>;
                  })}
                </div>
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {savedPost.map((item) => (
                  <div className="border border-slate-100 rouded-md">
                    <PostCard></PostCard>
                  </div>
                ))}
              </div>
            ):(
              ""
            )}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
