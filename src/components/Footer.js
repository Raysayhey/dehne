import React from 'react'
import { Link } from 'gatsby'

// import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>dehne.ch</h2>
            <p>            Individuelles Dehnen am Dienstag oder Mittwoch Abend. <br/>
Ein Gruppe geleitet von Romie Lotmar. <br />
            Diplomierte Masseurin inkl. BodyWork <br/>
            Jahrelange Erfahrung im Bereich Gesundheit und Yoga <br/>

                 </p>
            <ul className="actions">
            
            </ul> 
        </section>
        <section>
            <h2>Praxis Lebensraum</h2>
            <dl className="alt">
                <dt>Addresse</dt>
                <dd>Sumatrastrasse 39 &bull; Zürich &bull; CH</dd>
               
                <dt>Email</dt>
                <dd><a href="mailto:info@praxislebensraum.ch">info@praxislebensraum.ch</a></dd>
            </dl>
            <ul className="icons">
                
                <li><a href="https://www.facebook.com/Dehnech-508267936359664/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/dehne_zurich/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; 2018 dehne.ch</p>
    </footer>
)

export default Footer
