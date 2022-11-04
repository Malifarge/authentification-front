import { BrowserRouter,Routes,Route } from "react-router-dom"
import { UserContextProvider } from './Context/User'

import './App.css'

import Home from "./Pages/Home"
import Favorites from "./Pages/Favorie"
import Paiements from "./Pages/Paiement"
import Product from "./Pages/Product"
import Products from "./Pages/Products"
import Profil from "./Pages/Profil"
import SignUp from "./Pages/SignUp"
import NotFound from "./Pages/NotFound"
import Messages from "./Pages/Messages"
import EditProfil from "./Pages/EditProfil"

const App = () =>{
  return(
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path ='/favorites' element={<Favorites/>} />
          <Route path='/paiement' element={<Paiements/>} />
          <Route path='/:id' element={<Product/>} />
          <Route path='/:id/messages' element={<Messages/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/profil' element={<Profil/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/EditProfil' element={<EditProfil/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </UserContextProvider>
        
    </BrowserRouter>
  )
}

export default App
