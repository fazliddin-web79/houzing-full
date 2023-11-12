import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import profilePicture from "./../../assets/img/profile.jpg";

const UserProfile = () => {
  const user = {
    name: "Fazliddin Yakubjonov",
    email: "yakubjonovfazliddin777@gmail.com",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        style={{ padding: "20px", maxWidth: "400px", width: "100%" }}
      >
        <Avatar
          alt={user.name}
          src={profilePicture}
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <Typography
          variant="h5"
          fontWeight={700}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {user.name}
        </Typography>
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          +998907776328
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ textAlign: "center", marginTop: "5px" }}
        >
          {user.email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.href = "https://t.me/fazliddin_yakubjonov_01";
          }}
          style={{ marginTop: "20px", width: "100%" }}
        >
          Murojaat qilish
        </Button>
      </Paper>
    </div>
  );
};

export default UserProfile;
