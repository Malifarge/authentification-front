import { BrowserRouter,Routes,Route } from "react-router-dom"
import { UserContextProvider } from './Context/User'

import './App.css'

import Home from "./Pages/Home"
import Favorites from "./Pages/Favorie"
import Paiements from "./Pages/Paiement"
import Product from "./Pages/Product"
import Products from "./Pages/Products"
import Profil from "./Pages/Profil"
import SignIn from "./Pages/SignIn"
import NotFound from "./Pages/NotFound"
import Messages from "./Pages/Messages"

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
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </UserContextProvider>
        
    </BrowserRouter>
  )
}

export default App
