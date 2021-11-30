import React from 'react';
import '../nev/style.css'
import { Link } from 'react-router-dom';

// git remote set-url origin https://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@github.com/https://github.com/HarshitDubey007/ChefAtHome
const Navigation = () => {
    return (
        <>
        <nav className=" px-4 mx-auto flex items-center justify-between py-4">
        <div>
             <img className="rounded-full" src="images/logo.jpg" alt="" />
        </div>
          <ul className="flex items-center">
            <li><Link to="/" className="ml-6">home</Link></li>
            <li><Link to="/venues" className="ml-6">Venues</Link></li>
            <li><Link to="" className="ml-6">Vendors </Link></li>
            <li><Link to="" className="ml-6">Photos</Link></li>
            <li><Link to="" className="ml-6">Real Weddings</Link></li>
            <li><Link to="" className="ml-6">Blog</Link></li>
            <li><Link to="" className="ml-6">Shop</Link></li>
            <li><Link to="" className="ml-6">E-Envites</Link></li> 
            <li><Link to="/about" className="ml-6">About</Link></li>
            <li><Link to="/cart" className="ml-6">
                  <div>
                    <span>10</span>
                    <img src="/images/cart.png" alt="cart-icon" />
                  </div>
              </Link></li>
          </ul>
      </nav>
        </>
    )
}

export default Navigation;