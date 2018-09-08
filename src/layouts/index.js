import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import '../../semantic/dist/semantic.min.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Ruben Dougall. Computer Science student at University of Warwick. Recreational house music producer.' },
        { name: 'keywords', content: 'ruben, dougall, rubendougall, personal, website, university, warwick, computer, science, student, house, music, producer' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '70px',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
