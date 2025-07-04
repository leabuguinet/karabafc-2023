import React from 'react'
import Layout from '../components/layout';

const Mentions = ({ location }) => {

 const pageUrl = location.pathname

  return (
    <Layout pageUrl={pageUrl}>
    <div className="main-content" >
        <h1>Mentions Légales</h1>
        
        <h2>Développement site & Design :</h2>
        
            <p>Email : lea.buguinet@gmail.com</p>
            <p className='p-mb'>Site Web : www.leabugui.net</p>
        
        <h2>Hébergement :</h2>
        
            <p>Hébergeur : OVH</p>
            <p>2 rue Kellermann – BP 80157 59053 ROUBAIX CEDEX 1</p>
            <p className='p-mb'>Site Web : www.ovh.fr</p>

        <h2>Crédits :</h2>
        
            <p>Pictogrammes : https://icones8.fr/</p>


        <h2>Cookies :</h2>

          <p>Ce site n'utilise aucun cookie et ne collecte aucune donnée.</p>

    </div>
    </Layout>
  )
}

export default Mentions