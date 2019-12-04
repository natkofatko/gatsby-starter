import React, { Component } from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ margin: ` 0 auto`, maxWidth: 500 }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
