import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a href=' ' className='navbar-brand btn btn-sm btn-warning fs-3 ' >Reddy's Restaurant</a>
            <button className='btn btn-primary'>
                Orders <span className='badge bg-secondary'>0</span>
            </button>
        </nav>
    </div>
  )
}

export default Header;