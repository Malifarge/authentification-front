import { useNavigate } from "react-router-dom";
import New from '../images/New.png'

const SideBar = ({ user }) => {

const Navigate = useNavigate()

const handleNavigate = (link) => {
    Navigate(link)
}

  return <div classname="sidebar">
    <img src="" alt="Profile" onClick={() => handleNavigate("/profile")} />
    <div>
    <img src="" alt="Favorites" onClick={() => handleNavigate("/profile")} />
    <img src="" alt="Conversation" onClick={() => handleNavigate("/conversation")} />
    <img src={New} alt="New" onClick={() => handleNavigate("/create-annonce")} />
    </div>
    <img src="" alt="Deconnexion" onClick={() => handleNavigate("/login")} />

  </div>;
};


export default SideBar