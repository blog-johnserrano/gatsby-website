import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

const Hola = () => (
  <Layout>
    <section id='Hola'>
      <h1>Hola Bienvenido a GatsbyJS</h1>
      <p>Bienvenido a la página de Hola</p>
      <Link to="/">Regresa al inicio</Link>
    </section>
  </Layout>
)

export default Hola