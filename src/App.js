import { BrowserRouter,Routes,Route } from "react-router-dom"
<<<<<<< HEAD
import { UserContextProvider } from './contexts/User'
=======

>>>>>>> 274d58a5c71e56e24d154d59041fb7b958514a24
import Home from "./Pages/Home"
import Favorites from "./Pages/Favorie"
import Paiements from "./Pages/Paiement"
import Product from "./Pages/Product"
import Products from "./Pages/Products"
import Profil from "./Pages/Profil"
import SignIn from "./Pages/SingIn"
import NotFound from "./Pages/NotFound"



const App = () =>{
  return(
    <BrowserRouter>
      {/* <UserContextProvider> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path ='/favorites' element={<Favorites/>} />
          <Route path='/paiement' element={<Paiements/>} />
          <Route path='/:id' element={<Product/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/profil' element={<Profil/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      {/* </UserContextProvider> */}
        
    </BrowserRouter>
  )
}

export default App
