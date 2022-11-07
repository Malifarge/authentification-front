import { useNavigate } from "react-router-dom"

import Buttons from "./Button"
import H2 from "./H2"

const Card = ({ product }) => {
  const navigate = useNavigate()

  const handleBuyClick = () => {
    navigate("/productID")
  }

  const handleMessageClick = () => {
    navigate("/productID/messages")
  }

  return (
    <article>
      <div
        style={{
          backgroundImage: `${product.image}`,
        }}
      ></div>
      <H2>{product.name}</H2>
      <div>
        <Buttons
          text="Buy"
          variant="contained"
          color="#F8FFE3"
          background="#452D4E"
          border="#452D4E"
          handleClick={handleBuyClick}
        />
        <Buttons
          text="Send a message"
          variant="outlined"
          color="#FFEE55"
          background="#3F3F3F"
          border="#452D4E"
          handleClick={handleMessageClick}
        />
      </div>
    </article>
  )
}

export default Card
