import React from "react";

const UserReelsCard = () => {
  return (
    <div className="w-[15rem] px-2">
      <video controls
        className="w-full h-full"
        src="https://videos.pexels.com/video-files/5994360/5994360-sd_776_540_30fps.mp4"
      ></video>
    </div>
  );
};

export default UserReelsCard;
