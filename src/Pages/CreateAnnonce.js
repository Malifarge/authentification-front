/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../Context/User"

import Createannonce from "../Components/Templates/CreateAnnonce"

const CreateAnnonce = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [])

  return <Createannonce />
}

export default CreateAnnonce
