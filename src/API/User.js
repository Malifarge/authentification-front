const User = async token => {
    const request = await fetch('http://localhost:5000/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    console.log(request);
    const response = await request.json()
  
    return response
  }
  
  export { User }