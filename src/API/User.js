const User = async token => {
    const request = await fetch('https://dytzpxpdaohrujllvexc.supabase.co/auth/v1/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const response = await request.json()
  
    return response
  }

  const UpdateUser = async user => {
    const request = await fetch('https://dytzpxpdaohrujllvexc.supabase.co/auth/v1/user', {
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