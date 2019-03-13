import React from 'react';

const HeaderBack = ({data}) => {
    return (
    <div className='header__slide-each' style={{'backgroundImage' : `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
            {data.hasOwnProperty('title')?(
                <h2 className='header__slide--heading'>
                    <span className="header__slide--heading-span">
                        {data.title}
                    </span>
                </h2>
            ):(
                <h2 className='header__slide--heading'>
                    <span className="header__slide--heading-span"> 
                        {data.name}
                    </span>
                </h2>
            )
            }
                    
        </div>
    )
}

export default HeaderBack;