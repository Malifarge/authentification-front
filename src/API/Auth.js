const login = async user => {
    const request = await fetch('https://dytzpxpdaohrujllvexc.supabase.co/auth/v1/token?grant_type=password', {
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