import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar'>

            <div className="main">
                {/* <img src="images/main-logo.png" alt=""/> */}
                <h2>Bistro Bliss</h2>
                <ul className="tabs">
                    <div className="on-hover">
                        <li><a href="">Home</a></li>
                    </div>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button>Book A table</button>
            </div>
        </div>


    )
}
