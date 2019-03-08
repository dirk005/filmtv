import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import CardList from '../Components/CardList';

const Scroll = ({header, films}) => {
    return (
        <>
            <h2 className='secondery-heading'>{header} </h2>
            <ScrollContainer className="scroll-container">
                <CardList films={films} />
            </ScrollContainer>	
        </>
    )
}

export default Scroll;