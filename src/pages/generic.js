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
<h2>Dehnen für Alle </h2>

<p>
Der Raum und die Hilfsmittel stehen 1 x pro Woche zur Verfügung um zu Dehnen. <br/>
Von 17:00 - 20:00 kann man vorbei kommen um selbstständig zu dehnen <br/>
Sie benötigen nur bequeme Kleider - Yogamatten sind im Raum vorhanden.
Mit dem Coaching von Romie kann evaluiert werden wie man am besten anfängt. <br/>

<br/>
Ziel ist es die Dehnungsübungen auch Zuhause machen zu können. 

</p>
<h2> Passives Dehnen </h2>

<p>Es wird langsam und lang gedehnt, passend zu den Möglichkeiten des Körpers. <br/>


Diese Art von langanhaltendem Dehnen hilft dem Körper verständlich zu machen 
inwiefern adaptiert werden soll.
   <br/>
   Wir benutzen Hilfsmittel wie Kissen, Sandsäcke etc. um die korrekte Dehnung zu erreichen. <br/>


 
  
<p/>


<p> <h2>   Dehnbarkeit  </h2>


Bekannt ist, dass Körpergewebe mit dem Alter unbeweglicher wird und an Kraft verliert. <br/>
Im Alter beweglich und fit zu bleiben ist möglich durch regelmässiges Dehnen und Training<br/> 
Auch bekannt ist, zu langes Sitzen oder einseitiges Bewegen führt zu Verspannungen<br/>
Dehnen ist ein Ansatz zur Lösung von körperlichen Beschwerden <br/>
</p> 


<p><h2>Ziele</h2>
- Bis ins hohe Alter beweglich und vital bleiben.<br />
- Die Folgen von Unfällen besser überwinden können. <br />
- Verbesserung der Körperhaltung und Verminderung von Gelenkschmerzen. <br/>
- Mit elastischem Körpergewebe dazu beitragen Muskelmasse zu behalten.<br/>
- Muskeln, Organe, Faszien usw. optimal mit Sauerstoff zu versorgen </p>
</p>  
<br/>

         

            <center><button className = "big special button" > <a href="/"> zurück</a></button> </center> 
          
          </section>
        </div>
        
      </Layout>
    )
  }
}

export default Generic

 