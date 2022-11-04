import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserPicture } from "../API/Picture";

import New from '../images/New.png'

const SideBar = ({ user }) => {

  const [picture,setPicture] =useState(null)

const Navigate = useNavigate()

const handleNavigate = (link) => {
    Navigate(link)
}

useEffect(()=>{
  const {picture} = UserPicture(user.id)
  setPicture(picture)
},[user])


  return <div className="sidebar">
    <img src={picture && picture} alt="Profile" onClick={() => handleNavigate("/profil")} />
    <div>
    {/* <img src="" alt="Favorites" onClick={() => handleNavigate("/favorites")} /> */}
    {/* <img src="" alt="Conversation" onClick={() => handleNavigate("/conversation")} /> */}
    <img src={New} alt="New" onClick={() => handleNavigate("/create-annonce")} />
    </div>
    <img src="" alt="Deconnexion" onClick={() => handleNavigate("/login")} />

  </div>;
};


export default SideBar