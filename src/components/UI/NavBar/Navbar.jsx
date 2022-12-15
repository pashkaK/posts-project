import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import cl from './Navbar.module.css'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.setItem('auth', 'false')
  }
  return (
    <div className={cl.navbar}>

      <div className={cl.navbar__items}>
        <Link className={cl.navbar__link} to="/about">About</Link>
        <Link className={cl.navbar__link} to="/posts">Posts</Link>
      </div>
        <MyButton onClick={logout}>
            Logout
        </MyButton>
    </div>
  );
};

export default Navbar;
