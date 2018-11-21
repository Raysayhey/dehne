import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Dehne.ch</h1>
        <p>Dehnen für jung und alt in 
        <a href="https://www.meetup.com/Zurich-Bewusste-Bewegung-Dehnung-mit-Yin-Yoga-Meetup/events/"> Zürich</a> </p>
    </header>
)

export default Header
