import Card from "../Card";
import SideBar from "../SideBar";

const Profile = (user, favorites) => {
  return (
    <div className="main-container">
    <SideBar/>
    <div className="user">
    <img src="" alt="profile"/>
    <h1>{user.name}</h1>
    </div>
    <div className="favorites">
        <h2>Favorites</h2>
        <div>{favorites.map((favorite) => {
            return(
            <Card/>
            )
        })}</div>
    </div>
    </div>
  );
};

export default Profile;
