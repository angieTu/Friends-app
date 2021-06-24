import React from 'react';

import Container from './primitives/Container';
import Image from './primitives/Image';
import Span from './primitives/Span';
import Heading from './primitives/Heading'


const CardCharacter = ({id, img, name, actor}) => {
    
    return (
        <Container  
        id={id}
        as='article'
        className='character-container'>
            <Container className='img-container'>
                <Image src={img} />
            </Container>
        <Container className='character-info'>
            <Heading level='3'>{name}</Heading>
            <Span>{actor}</Span>
        </Container>
        </Container>
    )

}

export default CardCharacter