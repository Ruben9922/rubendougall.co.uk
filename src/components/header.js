import React from 'react'
import Link from 'gatsby-link'
import {Menu, Container} from 'semantic-ui-react'

const Header = ({siteTitle}) => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item header link href={"/"}>
        {siteTitle}
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item link href={"/projects"}>
          Projects
        </Menu.Item>
        <Menu.Item link href={"/about"}>
          About
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default Header
