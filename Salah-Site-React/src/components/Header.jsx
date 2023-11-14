import React from "react";

function Header() {
  return (
    <div>
    
      <div className="nav-wrapper">
        <div className="logo-container">
          <NavLink to="/"> SALAH SAFSAF</NavLink>
        </div>
        <nav>
          <input className="hidden" type="checkbox" id="menuToggle" />
          <label className="menu-btn"  htmlFor="menuToggle">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </label>
          <div className="nav-container">
            <nav className="nav-tabs">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/music">Music</NavLink>
              <NavLink to="/film">Film</NavLink>
              <NavLink to="/Photo">Photo</NavLink>
              <NavLink to="/model">Model</NavLink>
              <NavLink to="/Contact">Contact</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/products/cart">
                <FaShoppingBasket />
                {state.cart.length}
              </NavLink>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
