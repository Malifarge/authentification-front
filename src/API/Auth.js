const login = async user => {
    const request = await fetch('https://authentification-backend.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  
    const response = await request.json()
    return response
  }

  const CreateUser = async user => {
    const request = await fetch('https://authentification-backend.herokuapp.com/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  
    const response = await request.json()
    return response
  }
  
  export { login, CreateUser }