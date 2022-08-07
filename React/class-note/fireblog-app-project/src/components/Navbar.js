

import React from 'react'
import BlogCard from './BlogCard';
import BlogForm from './BlogForm';

const Navbar = () => {
  return <div className='Navbar'>
   
    <div className='navbarblog text-center justify-content-around'>
    <BlogCard />
    <BlogForm/>

    <img className='clwlogo ' src="./assets/clwlogo.jpg" alt="" />
    
    </div>

    
  </div>
  
}

export default Navbar;