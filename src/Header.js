import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
    const [{basket, user}, dispatch]= useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo'
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
        </Link>
        
        <div className='header_search'>
            <input className='header_searchinput' type="text"/>
            <SearchIcon className='header_searchicon'/>
        </div>

        <div className='header_nav'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} className='header_option'>
                    <span className='header_line1'>
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className='header_line2'>
                    {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>

            <Link to='/orders'>
                <div className='header_option'>
                <span className='header_line1'>
                        Return
                    </span>
                    <span className='header_line2'>
                        & Order
                    </span>
                </div>
            </Link>
            

            <div className='header_option'>
            <span className='header_line1'>
                   Your
                </span>
                <span className='header_line2'>
                    Prime
                </span>
            </div>
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header_line2 header_basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header