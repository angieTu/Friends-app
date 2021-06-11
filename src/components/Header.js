import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom';
import Container from './primitives/Container';
import Image from './primitives/Image';
import Link from './primitives/Link';

import DataContext from "../context/DataContext";


const Header = () => {
    const { logo } = useContext(DataContext);

    return ( 
    <header className='header'> 
        <Container> 
            <Image src={logo} />
        </Container>
        <Container className='header-container'>
            <NavLink activeClassName='selected' to='/'>Home</NavLink>
            <NavLink activeClassName='selected' to='/characters'>Characters</NavLink>
            <NavLink activeClassName='selected' to='/seasons'>Seasons</NavLink>
            <NavLink activeClassName='selected' to='/episodes'>Episodes</NavLink>
        </Container>
        <Container>
            <Link target='_blank' href='https://documenter.getpostman.com/view/12618304/TW6wJoZQ'>DOC</Link>
        </Container>
    </header>
    )
}

export default Header;