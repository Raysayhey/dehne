import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import blume from '../assets/images/blume.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
   
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="dehne.ch" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>dehne.ch</h2>
                </header>
                <p>Dehnen verbessert die Beweglichkeit 
                  und hilft sowohl 
                  kurzfristig als auch langfristig gegen Verspannungen. <br />

                  Wir dehnen Zusammen mit dem Ziel eine bleibende Verbesserung zu erreichen und das jeder lernt für sich selbst ein Dehnprogramm zusammenzustellen.  </p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Mehr dazu</Link></li>
                </ul>
              </div>
              <span className="image"><img src={blume} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Wieso dehnbar</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-superpowers"></span>
                <h3>Beweglichkeit</h3>
                <p>Durch das Dehnen werden die Muskeln und Faszien bewegt.
                  Die Durchblutung soll angeregt werden und 
                  die Muskeln können wieder besser arbeiten.

                </p>
              </li>
              <li>
                <span className="icon major style3 fa-eercast"></span>
                <h3>Fit</h3>
                <p>Dehnen ist die Abwechslung zum 
                  Sport, um die Muskeln beweglich zu halten und somit Verspannungen und Verletzungen vorzubeugen
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-heart"></span>
                <h3>Atmung</h3>
                <p>Ein gesunder Körper braucht viel Sauerstoff. 
                  Das tiefe Atmen beim Dehnen hilft den Sauerstoff zu den Organen und den Muskeln zu transportieren.
                 </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Mehr dazu</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major1">
              <h2>Dehnbarkeit</h2>
              <p></p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-asterisk"></span>
                <strong>656</strong> Muskeln
              </li>
            
              <li className="style3">
                <span className="icon fa-cogs"></span>
                <strong>205</strong> Knochen
              </li>
              <li className="style4">
                <span className="icon fa-ils"></span>
                <strong>100000km</strong> Blutgefässe
              </li>
              
            </ul>
            <p className="content">

            </p>
            <footer className="major">
            
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Kommen Sie vorbei & machen Sie mit</h2>
              <p> 1 x pro Woche Dehnen in Zürich.</p>
               <p> Sie benötigen lediglich bequeme Kleidung.</p>
                <p>Kosten: Ein kleiner freiwilliger Beitrag </p>
             
            </header>
            <footer className="major">
              <ul className="actions">    
                          <button className = "big special button" > <a href="https://www.meetup.com/Zurich-Bewusste-Bewegung-Dehnung-mit-Yin-Yoga-Meetup/events/"> anmelden</a></button>

                
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
