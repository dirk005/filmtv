import React from 'react';

export const Card = ({id, title, poster,rating}) => (
    <div className='card'>            
        <figure className='card__shape'>
            <img className='card__shape--image' src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title}/>
        
            <figcaption className='card__shape--caption'>                   
                <button className='card__shape--caption-button'>Read More</button>
            </figcaption >
        </figure>           
        <div className="card__rating">
            {rating}
        </div>
        
    </div>
)