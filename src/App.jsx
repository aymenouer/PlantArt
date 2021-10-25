import React from 'react'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { ProductList } from './pages/ProductList'
import {Login} from './pages/Login';
import { Register } from './pages/Register';
import { Cart } from './pages/Cart';
import {

  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom"

export const App = () => {
  return (
    <Router>
    
 <Switch>
 <Route exact path="/">
 <Home/>
         </Route>
 <Route path="/products">
   {
    <ProductList />
   }
          
         </Route>
 <Route path="/login">
 {
    <Login />
   }
         
         </Route>
 <Route path="/register">
 {
    <Register />
   }
       
         </Route>
         
         <Route path="/cart">
 {
    <Cart />
   }
       
         </Route>
        
 <Route path="/produit/:produitId">
           <Product />
         </Route>
 </Switch>
  
   
    </Router>

  )
}
