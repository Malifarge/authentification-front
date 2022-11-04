const UserPicture = async (id) => {
    const request = await fetch(`https://authentification-backend.herokuapp.com/picture/profile/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const response = await request.json()
  
    return response
  }

const ProductPicture =async (id) =>{
    const request = await fetch(`https://authentification-backend.herokuapp.com/picture/product/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const response = await request.json()
  
    return response
}

export {UserPicture,ProductPicture}