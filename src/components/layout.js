import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from 'gatsby';
import Header from "./header";
import "./style.css"; 

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  const {menuLinks } = data.site.siteMetadata;

  return (
    <>
      <Header 
        siteTitle="Intelligent Machine Learning for Real Time Processing of Hyperspectral Video Streams" 
        menuLinks={menuLinks} 
      />
      <div className="content-container">
        {children}
      </div>
      <footer className="footer">
        <a href="https://cvc-lab.github.io/cvc-website/" style={{ color: 'white', textDecoration: 'none' }}>Computational Visualization Center</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
