import { useState } from "react"
import SideBar from "../SideBar"
import Input from "../Input"
import Buttons from "../Button"
import { CreateProduct, CreatePicture } from "../../API/Product"

const Createannonce = () => {
  const [productName, setProductName] = useState("")
  const [productDescription, setDescription] = useState("")
  const [productPrice, setPrice] = useState(0)
  const [PictureName, setPicture] = useState(null)

  const handleProductNameChange = (e) => {
    setProductName(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }
  const handlePictureChange = (e) => {
    setPicture(e.target.value)
  }

  const handleSubmit = async () => {
    const Newproduct = {
      productName,
      productDescription,
      productPrice,
    }

    const image = {
      PictureName,
    }
    const createProduct = await CreateProduct(Newproduct)
    const sendPicture = await CreatePicture(image)
    console.log(createProduct)
  }
  return (
    <div className="container new-offer">
      <div className="create-offer-container">
        <h2>
          Create New Offer<span className="point">.</span>
        </h2>
        <form
          action="/single"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <Input
            label="Product name"
            type="text"
            handleChange={handleProductNameChange}
            required
            variant="outlined"
          />
          <Input
            label="description"
            type="text"
            handleChange={handleDescriptionChange}
            required
            variant="outlined"
          />
          <Input
            label="price"
            type="number"
            handleChange={handlePriceChange}
            required
            variant="outlined"
          />
          <Input
            label="picture"
            type="file"
            name="image"
            single
            handleChange={handlePictureChange}
            variant="outlined"
          />
          <Buttons
            variant="outlined"
            type="submit"
            text="Create"
            color="#FFEE55"
            background="#242424"
            border="#FFEE55"
          />
        </form>
      </div>
    </div>
  )
}

export default Createannonce
