//ADD SCROLL FOR MOVIES TO SCROLL HORIZONTALLY

import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import {CardList} from '../Components/CardList';

export const Scroll = ({header, films}) =>  (
        <>           
            <h2 className='heading-secondary'>{header} </h2>
            <ScrollContainer className="scroll-container">
                <CardList films={films} />
            </ScrollContainer>	
        </>
    )