import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import '../styles/global.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Jonathan Moeller</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)
export default IndexPage