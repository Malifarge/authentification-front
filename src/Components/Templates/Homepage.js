import Card from "../Card";
import SideBar from "../SideBar";


const Homepage = ({offers}) => {   

  return (
    <div className="home-container container">
    <SideBar/>
    <div className="offers">
    {offers.map((offer) => {
    return (<Card product={offer} />)
    })}
    </div>
    </div>
  )
}

export default Homepage;
