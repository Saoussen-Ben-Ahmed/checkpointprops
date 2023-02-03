import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Profile from "./Profile/Profile";
import photo from "./image/my_photo.jpg";
function App() {
  const profile = {
    fullName: "Saoussen Ben Ahmed",
    bio: " My name is Saoussen Ben Ahmed",
    profession: " I am a mechatronic engineer",
  };
  function handleName(name) {
    alert(`my name is ${name}`);
  }
  return (
    <div className=" FullName">
      <Profile profile={profile} handleName={handleName}>
        <img src={photo} alt="" />{" "}
      </Profile>{" "}
    </div>
  );
}
export default App;
