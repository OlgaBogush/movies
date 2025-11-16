import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer blue-grey darken-2">
      <div className="footer-copyright blue-grey darken-2">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            repo
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
