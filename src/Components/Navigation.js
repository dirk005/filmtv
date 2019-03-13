import React, {Component} from 'react';
import logo from '../img/logo.png';

class Navigation extends Component {

    // Hide navigation after item selected
    unCheckCheckBox = () => {
        document.getElementById("nav-toggle").checked = false;
    }

    render(){
        return(
            <div className='nav'>
                <input type="checkbox" className="nav__checkbox" id="nav-toggle"/>
                <label htmlFor="nav-toggle" className="nav__button">
                    <span className="nav__icon">&nbsp;</span>
                </label>
                <div className="nav__background">
                    &nbsp;
                </div>
                <div className="nav__logo-box">
                    <img className="mav__logo" src={logo} alt="logo" />
                </div>
                <nav className="nav__navigation">
                    <ul className='nav__list'>
                        <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#movies" className='nav__link'>Movies</a></li>
                        <li className='nav__item' onClick={() => this.unCheckCheckBox()}><a href="#series" className='nav__link'>Series</a></li>
                    </ul>
                </nav>            
            </div>
        )
    }
}

export default Navigation;