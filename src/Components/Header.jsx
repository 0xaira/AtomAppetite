import logo from '../img/logo.png';
import React from 'react'

export default function Header() {
  return (
      <div className="flex items-center justify-between mt-6 px-16">
            <div className='h-8 w-auto'>
               <img src={logo} alt="Logo" className="h-12 w-auto ml-8 " />
            </div>
            <div>
                <ul className='flex items-center justify-between gap-6'>
                    <li>Search</li>
                    <li>Offer</li>
                    <li>Sign In</li>
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </div>      
      </div>

  )
}

