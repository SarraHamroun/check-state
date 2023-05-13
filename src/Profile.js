import React from 'react'

const Profile = (props) => {
  return (
    <>
    <img src={props.imgSrc} alt="person" />;
    <h3> {props.fullName}</h3>;
    <h3> {props.bio}</h3>;
    <h3> {props.profession}</h3>;
  </>
  )
}

export default Profile