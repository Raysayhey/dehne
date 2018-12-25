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
            <h2>Leben, Dehnen und Sport</h2>
            <p>Dehnen verbessert die Beweglichkeit und es hilft sowohl kurzfristig als auch langfristig gegen Verspannungen. 
              Dehnen ist mehr als sich nur zu strecken vor oder nach dem Sport. Wir dehnen länger und tiefer mit dem 
              Ziel eine bleibende Verbesserung zu erreichen.</p>

<h2>Wie wir dehnen praktizieren</h2>

<p>Jeder Teilnehmende ist woanders was die Dehnbarkeit betrifft, es wird zuerst angeschaut 
  wie starten und welche Unterstützung man benutzen kann. 

Das passive Dehnen verwendet einfache Hifsmittel wie Kissen, Decken, 
Yogablöcke usw. Je elastischer man ist umso weniger braucht man diese Hilfsmittel. <br/>

Ziel ist es, dass man ohne fremde Hilfe Zuhause für sich selbst sein Dehnprogramm machen kann. 

</p>
<h2> Passives Dehnen </h2>

<p>Es wird langsam gedehnt, passend zu den Möglichkeiten des Körpers und seiner individuellen Anatomie.
Langes, tiefes Dehnen hilft den Körper fit zu halten oder auch 
	wieder in Gang zu bringen. Das Ziel ist Muskeln, Sehnen, Faszien usw. optimal mit Sauerstoff zu versorgen.</p> 

Man kann seine Dehnbarkeit kennen lernen, besser darauf eingehen wie man persönlich am besten dehnt. <br/>

Einer der Schwerpunkte ist das Dehnen der Wirbelsäule und des Beckens, da diese Beide für einen Grossteil der Beweglichkeit
 verantwortlich sind. 

Das zu lange Sitzen oder einsitige Bewegen führt oft zu Verspannungen im Rücken und Nacken.
Dehnen ist der erste Schritt zur Lösung dieser Verspannungen, da man selbst daran arbeiten kann. <br/>

 Das Ziel ist die Muskeln geschmeidig zu halten, damit solche Probleme nicht wieder auftauchen.

<p/>


<p> <h2> Dehnen im Leben </h2>


Der Bewegungungsapparat des Menschen ist eine der komplexesten Strukturen, welche wohl noch lange nicht komplett erforscht sein wird. </p>

<p>Mit individuellem trainieren und nicht nur fixen Vorgaben kann jeder sein Programm selbst zusammenstellen.<br/>
Das ist der Grundgedanken von dehne.ch, damit jeder selbst zuhause dehnen kann. </p> 
<p> 

Körpergewebe wird im Verlauf der Zeit automatisch trockener und verliert an Elastizität. <br/>
Die lang gehaltenen Dehnstellungen verstärken den Fluss der Körperflüssigkeit und damit die natürliche Schmierung des Gewebes. 


Menschen können bewusst werden, wie sie beweglich bleiben können,
damit sie im Alter noch beweglich sind und das Leben geniessen können. 

</p>


<p><h2>Ziele</h2></p>
<p>- Dehnen unterstützt den Körper im Leben und beim Sport, ihn in seine bestmögliche Form 
     zu bringen und stabil zu halten.</p> 


<p>- Durch das Dehnen bleibt das Becken und die Wirbelsäule beweglich. 
</p>
<p>- Körpergewebe das elastisch-durchblutet ist kann im Alter dazu beitragen 
     die Muskelmasse zu erhalten, welche die Gelenke und Organe stützen und schützen.</p>

         
         

            <center><button className = "big special button" > <a href="/"> Zurück</a></button> </center> 
          
          </section>
        </div>
        
      </Layout>
    )
  }
}

export default Generic

 