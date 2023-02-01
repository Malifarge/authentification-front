import { BrowserRouter,Routes,Route } from "react-router-dom"


import './App.css'
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"

const App = () =>{
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signUp' element={<SignUp/>} />
          </Routes>
     </BrowserRouter>
  )
}

export default App
