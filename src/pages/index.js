import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "./../components/hero"
import Header from "./../components/header"
import Image from "./../components/image"

const IndexPage = () => (
  <>
    <Header></Header>
    <Hero></Hero>
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `200px`, marginBottom: `2.45rem` }}>
        <Image />
      </div>
    </Layout>
  </>
)

export default IndexPage
