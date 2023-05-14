import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaBeer, FaUser } from 'react-icons/fa';



const Header = () => {

    const { user, logoutUser } = useContext(AuthContext);

    const handleSignOutUser = () => {
        logoutUser()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }


    const menuItems = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='/products'>Products</Link></li>
        {
            user?.uid ?
                <li><Link onClick={handleSignOutUser} >Logout</Link></li>
                :
                <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

        {
            user?.photoURL ?
                <div className='flex items-center'>
                    <img title={user?.displayName} src={user?.photoURL} className='w-[35px] h-[35px] rounded-full cursor-pointer' alt="" />
                </div>
                :
                <div className='flex items-center justify-center'>
                    <FaUser></FaUser>
                </div>
        }




    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">My Website</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;