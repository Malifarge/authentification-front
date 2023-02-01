const login = async user => {
    const request = await fetch('', {
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
    const request = await fetch('', {
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