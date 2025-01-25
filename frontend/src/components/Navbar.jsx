import React from 'react';
import { Link } from 'react-router-dom';
import { UseLogout } from '../hooks/UseLogout';
import { useAuthContext } from '../hooks/UseAuthContext';
const Navbar = () => {
    const { logout } = UseLogout();
    const {user} = useAuthContext();
    const handleClick = () => {
        logout();
    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    { user && (<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Logout</button>
                    </div>)}
                    { !user && (<div className='login'>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>)}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;
