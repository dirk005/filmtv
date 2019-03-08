import React from 'react';

const Card = ({id, title, overview, poster, release_date,rating}) =>{
    
    return (
        <div className='card'>
            {/* <h2 className="heading-secondary">{title}</h2> */}
          <figure className='card__shape'>
                <img className='card__shape--image' src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title}/>
          
                <figcaption className='card__shape--caption'>
                {overview}
                <button className='card__shape--caption-button'>Read more</button>
                </figcaption >
            </figure>
            <div className='card__top'>
                <p className="card__release">{release_date}</p>
                <p className="card__rating">{rating}</p>
            </div>
        </div>
    )
}

export default Card;