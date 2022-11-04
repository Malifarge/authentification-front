import { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserPicture } from "../API/Picture";

import New from '../images/New.png'
import logoutimg from '../images/logout.png'

import { UserContext } from "../Context/User";

const SideBar = ({ user }) => {

  const [picture,setPicture] =useState(null)

  const{logout} =useContext(UserContext)

const navigate = useNavigate()

const handleNavigate = (link) => {
    navigate(link)
}

const handleLogoutClick = () =>{
  logout()
  navigate("/")
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
    <img src={logoutimg} alt="Deconnexion" onClick={handleLogoutClick} />

  </div>;
};


export default SideBar