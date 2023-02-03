import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { profile, children, handleName } = props;
  const { bio, fullName, profession } = profile;
  const handleClick = () => handleName(fullName);
  return (
    <div className="profile">
      <h1 className="profile__name">{fullName}</h1>
      <p className="profile__bio"> {bio}</p>
      <p className="profile__profession">{profession}</p>
      {children}
      <a href="#!" onClick={handleClick}>
        {" "}
        click me
      </a>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Profile;
