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
  
  export { User }