import React from "react";
import messi from "../leomessi.jpg";
const ProfilePhoto = () => {
  return (
    <img
      src={messi}
      alt="profile logo"
      style={{
        borderRadius: "50%",
        display: "block",
        margin: "5vh auto",
        width: "200px",
        height: "200px",
      }}
    />
  );
};

export default ProfilePhoto;
