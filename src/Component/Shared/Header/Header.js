import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineAddTask } from 'react-icons/md';
import logo from '../../../asset/hellwet.png'
import { MdContactPhone } from 'react-icons/md';
import { FaSignInAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };


    const menuItems = <>
        <li><Link to='/'>HOME<AiFillHome /></Link></li>
        <li><Link to='/addTask'>ADD TASK<MdOutlineAddTask /></Link></li>
        <li><Link to='/contact'>CONTACT<MdContactPhone /></Link></li>
        <li>{user ? <button onClick={logout} className="btn btn-secondary text-white">signout<FaSignOutAlt /></button> : <Link to='/login'>LOGIN <FaSignInAlt /></Link>}</li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-secondary to-primary lg:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <Link to="/">
                        <img className='h-10 mx-8' src={logo} alt="" />
                    </Link>
                    <h1 className='text-xl font-bold'>HELLWET SOFTWARE</h1>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;