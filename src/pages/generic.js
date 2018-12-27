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
<h2>Wie wir Dehnen </h2>
<p>
Die Dehnbarkeit unterscheidet sich bei jedem. Daher wird am Anfang evaluiert wie beweglich man ist 
und mit welchen Dehnungsübungen begonnen wird.<br />

Wir praktizieren passives Dehnen, welches einfache Hilfsmittel wie Yogablöcke, Kissen, Bälle usw. verwendet.<br/> 
 Je elastischer man ist umso weniger ist man auf Hilfsmittel angewiesen. <br/>

Ziel ist es die Dehnungsübungen auch Zuhause machen zu können. 

</p>
<h2> Passives Dehnen </h2>

<p>Es wird langsam und lang gedehnt, passend zu den Möglichkeiten des Körpers. <br/>

Diese Art von langanhaltendem Dehnen hilft dem Körper verständlich zu machen inwiefern adaptiert werden soll.
   <br/>
  Unter Anderem ist das Dehnen der Wirbelsäule und des Beckens ein Fokus.<br/>

 Das Ziel ist es Muskeln, Sehnen, Faszien usw. optimal mit Sauerstoff 
 zu versorgen und dem Körper helfen zu entschlacken.</p>
  
<p/>


<p> <h2>  - Dehnbarkeit - </h2>

Der Bewegungsapparat des Menschen ist komplex
und noch lange nicht komplett erforscht.<br/>
Bekannt ist, dass Körpergewebe mit dem älter werden trockener wird und an Elastizität verliert. <br/>
Im Alter beweglich und schmerzfrei zu bleiben ist möglich durch Dehnbarkeit.<br/> 
Auch bekannt ist, zu langes Sitzen oder einseitiges Bewegen führt zu Verspannungen und Verklebungen.<br/>
Dehnen ist ein Schritt zur Lösung dieser Probleme und man kann selbst daran arbeiten. <br/>
</p> 


<p><h2>Ziele</h2>
- Bis ins hohe Alter beweglich und vital.<br />
- Die Folgen von Unfällen besser überwinden. <br />
- Verbesserung der Körperhaltung und Verminderung von Gelenkschmerzen. <br/>
- Mit elastischem Körpergewebe dazu beitragen Muskelmasse zu behalten<br/>
</p>  

         

            <center><button className = "big special button" > <a href="/"> zurück</a></button> </center> 
          
          </section>
        </div>
        
      </Layout>
    )
  }
}

export default Generic

 