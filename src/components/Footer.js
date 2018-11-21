import React from 'react'
import { Link } from 'gatsby'

// import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>dehnen.ch</h2>
            <p>EIne Gruppe aus jungen und alten, welche das dehnen schätzen 
                und im Alter noch beweglich das Leben geniessen wollen.
                Wir glauben, dass man durch dehnen die beschwerden im Alter 
                wesentlich verringern kann und verspannungen los wird.
                 </p>
            <ul className="actions">
                <li><Link to="/generic" className="button"></Link></li>
            </ul> 
        </section>
        <section>
            <h2>Praxis Lebensraum</h2>
            <dl className="alt">
                <dt>Addresse</dt>
                <dd>Sumatrastrasse 39 &bull; Zürich &bull; CH</dd>
                <dt>Natel</dt>
                <dd>123 456 789 10 11</dd>
                <dt>Email</dt>
                <dd><a href="#">no-email@adress.yet</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Template von: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
