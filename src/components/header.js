import React from 'react'
import Link from 'gatsby-link'
import {Menu, Container} from 'semantic-ui-react'

const Header = ({siteTitle}) => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item header link>
        <Link to="/">
          {siteTitle}
        </Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item link>
          <Link to="/projects">
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/about">
            About
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default Header
