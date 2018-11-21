import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
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
            <h2>Weitere Informationen</h2>
            <p>Text 1
              Hier steht ein Text über dehnen und seine vorteile bzw. langzeit folgen falls regelmässig angewendet
            </p>
            <p>Text 2er Absatz - weitere erklärung</p>
            <h2>Untertitel - Mit weiterem text </h2>
            <p>Mehr text zu dehnen usw.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
