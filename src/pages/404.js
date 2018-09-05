import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const NotFoundPage = () => (
  <Header as="h2" icon textAlign="center">
    <Icon name="warning circle" color="red"/>
    404
    <Header.Subheader>Page not found</Header.Subheader>
  </Header>
)

export default NotFoundPage
