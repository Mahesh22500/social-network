import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { ExpandMore } from "@mui/icons-material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useDispatch, useSelector } from "react-redux";
import {
  createCommentAction,
  getAllPostAction,
  likePostAction,
} from "../../Redux/Post/post.action";
import { isLikeByReqUser } from "../../utils/isLikedByReqUser";

const PostCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();





  const { auth } = useSelector((source) => source);

  

  console.log("auth is ",auth);
 

  const handleShowComment = () => {
    setShowComments(!showComments);
  };

  const handleCreateComment = (content) => {
    const reqData = {
      data: {
        content: content,
      },
      postId: item.id,
    };
    dispatch(createCommentAction(reqData));
  };

  const handleLikePost = () => {
    dispatch(likePostAction(item.id));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName + " " + item.user.lastName}
        subheader={
          "@" +
          item.user.firstName.toLowerCase() +
          "_" +
          item.user.lastName.toLowerCase()
        }
      />

      {/* <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      /> */}

      <img className="w-full h-[30rem] object-cover object-top" src={item.image}   alt=""></img>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>

      <CardActions className="display-flex justify-between" disableSpacing>
        <div>
          <IconButton onClick={handleLikePost}>
            {isLikeByReqUser(auth.user.id, item) ? (
              <FavoriteIcon></FavoriteIcon>
            ) : (
              <FavoriteBorderIcon></FavoriteBorderIcon>
            )}
          </IconButton>
          <IconButton>{<ShareIcon></ShareIcon>}</IconButton>
          <IconButton onClick={handleShowComment}>
            {<ChatBubbleIcon></ChatBubbleIcon>}
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? (
              <BookmarkIcon></BookmarkIcon>
            ) : (
              <BookmarkBorderIcon></BookmarkBorderIcon>
            )}
          </IconButton>
        </div>
      </CardActions>

      {showComments && (
        <section>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar sx={{}}></Avatar>

            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCreateComment(e.target.value);
                  console.log("enter pressed ----", e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="write your comment..."
            ></input>
          </div>

          <Divider></Divider>

          {item.comments.map((comment) => (
            <div className="mx-3 space-y-2 my-5 text-xs">
              <div className="flex items-center space-x-5">
                <Avatar
                  sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}
                >
                  {comment.user.firstName[0]}
                </Avatar>

                <p>{comment.content}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </Card>
  );
};

export default PostCard;
