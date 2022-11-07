// Produits et messages

// Produits

const Products = async () => {
  const request = await fetch(
    "https://authentification-backend.herokuapp.com/product",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const response = await request.json()

  return response
}

const getProductsBySeller = async (id) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product/sell/${id}`
  )
  const response = await request.json()
  return response
}

const Product = async (id) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const response = await request.json()

  return response
}

const CreateProduct = async (Product) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    }
  )

  const response = await request.json()
  return response
}
const CreatePicture = async (Product) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/picture/${Product.id}/product`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    }
  )

  const response = await request.json()
  return response
}

const UpdateProduct = async (Product) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product/${Product.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    }
  )

  const response = await request.json()
  return response
}

const DeleteProduct = async (id) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  const response = await request.json()
  return response
}

// Messages

const Messages = async (id) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product/${id}/messages`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const response = await request.json()

  return response
}

const CreateMessages = async (Message) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product/${Message.id}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Message),
    }
  )
  const response = await request.json()

  return response
}

//   seller

const Seller = async (id) => {
  const request = await fetch(
    `https://authentification-backend.herokuapp.com/product/seller/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const response = await request.json()

  return response
}

export {
  Product,
  Products,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
  Messages,
  CreateMessages,
  Seller,
  CreatePicture,
  getProductsBySeller,
}
