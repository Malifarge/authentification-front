const User = async token => {
    const request = await fetch('https://authentification-backend.herokuapp.com/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const response = await request.json()
  
    return response
  }

  const UpdateUser = async user => {
    const request = await fetch('https://authentification-backend.herokuapp.com/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  
    const response = await request.json()
    return response
  }

  const UserID = async id => {
    const request = await fetch('https://authentification-backend.herokuapp.com/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const response = await request.json()
  
    return response
  }
  
  export { User,UpdateUser,UserID }