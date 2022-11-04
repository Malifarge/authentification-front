const Products = async () => {
    const request = await fetch('https://authentification-backend.herokuapp.com/product', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const response = await request.json()
  
    return response
  }

  const Product = async (id) =>{
    const request = await fetch(`https://authentification-backend.herokuapp.com/product/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const response = await request.json()
    
      return response
  }

  const CreateProduct = async (Product) => {
    const request = await fetch(`https://authentification-backend.herokuapp.com/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Product)
    })
  
    const response = await request.json()
    return response
  }

  const UpdateProduct = async (Product) => {
    const request = await fetch(`https://authentification-backend.herokuapp.com/product/${Product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Product)
    })
  
    const response = await request.json()
    return response
  }


