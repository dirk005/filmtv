import React from 'react';
import Card from './Card';

const CardList = ({films}) => {
    return(
        <div className="cardlist">
            {
                films.map((film , i) => {
                    return(
                        <Card  className='cardlist'
                            key={film.id}
                            id={film.id}
                            title={film.title}
                            overview={film.overview}
                            poster={film.poster_path}
                            release_date={film.release_date}
                            rating={film.vote_average}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList