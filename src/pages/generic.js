import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/dehne_generic.jpg'
// import blume from '../assets/images/blume.jpg'



class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Dehnen und Sport</h2>
            <p>Bewegung ist eine der komplexesten Wissenschaften, welche noch nciht komplett erforscht ist, obwohl schon seit so langer Zeit bekannt.
              Es bestreitet niemand, dass Sport nciht gesund ist, jedoch auch ungesund sein kann, je nachdem wie praktiziert.
              Dehnen ist ähnlich umstritten und in vieler hinsicht noch kontroverser, da es in der westlichen Welt nicht praktiziert wird und wenn dann als halbmassnahme zur vorbeugung von Verletzung für den Sport.
              Es besteht jedoch kein Zweifel, dass im Alter und bei Unfällen der Körper sich stabilisiert, indem er die Körperspannung beibehält.
</p><p>
              - Dehnungen helfen den Körpergewebefluss in Gang zu halten oder auch 
              wieder in Gang zu bringen, der unsere Muskeln, Sehnen, Faszien usw. versorgt und die Gelenke geschmeidig hält.
</p>
<p>
              - Überbeanspruchung, Verklebungen oder Vernarbungen des Gewebes werden durch sanftes, 
              langes Dehnen wieder durchblutet. Es wird sozusagen wieder Platz geschaffen für Beweglichkeit.
</p>          
           
            <h2>Wie wir dehnen praktizieren </h2>
            <p><h3>Passives Dehnen </h3></p>
              Das passive Dehnen eignet sich für jeden Menschen in jedem Alter, es wird langsam gedehnt, 
              passend zu den aktuellen Möglichkeiten des Körpers und der individuellen Anatomie des Körpers.
        <p>     
        Ziel des dehnen ist es den Körper wie beim Sport in seine bestmögliche Form zu bringen, um lange unbeschwert zu leben
        und das bestmögliche Leisten zu können ohne die Gefahr verletzt zu werden.
        Da sich jeder an einem anderen Ort befindet, was die Dehnbarkeit betrifft wird zuerst einmal evaluiert inwiefern man sich noch bewegen kann.
        Bewegung im Sinne von der maximalen Dehnbarkeit, welche die Muskeln und Faszien zulassen, natürlich ohne sich zu verletzen.
        </p>

        <p>Der Grosse Unterschied hier wird vorallem zwischen jung und alt und sehr beanspruchten Muskeln durch arbeit oder Sport festgestellt.
        </p>
        <p>
        Nachdem man seine eigenen Limiten kennt kann man besser darauf eingehen und versteht inwiefern man
        dehnen kann um die Schwachstellen zu bereinigen und dem Körper wieder den Blut durchfluss zu bringen, 
        welcher die Muskeln und Organe mit Sauerstoff versorgt.
        </p>
        <p>Einerseits ist es wichtig die regulären Muskeln, welche wir oft gebrauchen zu dehnen, 
          andererseits ist ein primärer Aspekt des dehnens die Wirbelsäule und kleineren im stich gelassenen Partien zu 
          stärken, welche in keinem normalen Fall wieder vitalisiert werden.</p>
          <p>Das grundlegende Prinzip von Dehnen ist die Wiederherstellung des Körpers durch Bewegung. </p>
          Nur durch einen ausgewogenen Einsatz am eigenen Körper kann der gewünschte Zustand der Beschwerdelosigkeit bis ins hohe alter 
          erhalten bleiben.
          <p></p>
          
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
