const User = async token => {
    const request = await fetch('', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const response = await request.json()
  
    return response
  }

  const UpdateUser = async user => {
    const request = await fetch('', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  
    const response = await request.json()
    return response
  }
  
  export { User,UpdateUser }