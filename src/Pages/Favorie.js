/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../Context/User"

const Favorites = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [])

  return (
    <div>
      <h1>Favorites</h1>
    </div>
  )
}

export default Favorites
