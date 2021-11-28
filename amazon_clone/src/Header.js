import React from 'react'
import './Header.css'
import logo from './images/amazon_logo.PNG'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import { Link } from 'react-router-dom';
import './App'
import { useStateValue } from './StateProvider'


function Header() {

    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='header'>
            
            <Link to ='/'>
                <img className='header_logo' src={logo}  alt="logo"/>
            </Link>

            <div className='header_search'>
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                    <div className='header_option'>
                            <span className='header_lineOne'>
                                Hello Guest
                            </span>
                            <span className='header_lineTwo'>
                                Sign In
                            </span>
                    </div> 
                    <div className='header_option'>
                            <span className='header_lineOne'>
                                Returns
                            </span>
                            <span className='header_lineTwo'>
                                & Orders
                            </span>
                    </div>
                    <div className='header_option'>
                            <span className='header_lineOne'>
                                Your
                            </span>
                            <span className='header_lineTwo'>
                                Prime
                            </span>
                    </div> 

                    <Link to="/checkout">
                    <div className='header_basket'>
                            <ShoppingBasketRoundedIcon/>
                            <span className="header_lineTwo  header_basketCount">{basket?.length}</span>
                    </div>
                    </Link>
            </div>

        </div>
    )
}

export default Header
