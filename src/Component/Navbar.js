import React from 'react';
import { Link } from 'react-router-dom';
const MyNavbar = () => {
return (
  <nav className='navbar'>
<h1>Paul Blog</h1>
<div className='links'>
<Link to="/">Home</Link>
<Link to ="Create">CreateBlogForm</Link>

</div>
    </nav>
)

}
export default MyNavbar;
