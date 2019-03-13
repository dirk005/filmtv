import React from 'react';
import { Slide } from 'react-slideshow-image';
import HeaderBack from './HeaderBack';

const properties = {
    duration: 5500,
    transitionDuration: 1500,
    infinite: true,
    indicators: true,
    arrows: false
  }

const Header = ({films}) => {
    
    console.log(films);
    return (
        <header className='header'>
            <Slide className='header__slide' {...properties}>            
                { films.map((data,i) => <HeaderBack key={i} data={data}/>) }
            </Slide>

        </header>
    );
}

export default Header;