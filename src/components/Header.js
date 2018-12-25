import React from 'react'

import logo from '../assets/images/haas_dehne.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Dehne.ch</h1>
        <p>
        <a href="https://www.meetup.com/Zurich-Bewusste-Bewegung-Dehnung-mit-Yin-Yoga-Meetup/events/"> Dehnen in Zürich</a> </p>
    </header>
)

export default Header
