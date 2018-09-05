import React from 'react'
import {Button, Container, Header, Icon, Image} from 'semantic-ui-react'
import profileImage from '../../public/static/ruben.jpg'

const IndexPage = () => (
  <Container fluid textAlign="center">
    <Image src={profileImage} size="small" circular centered/>
    <Header as="h1">
      Ruben Dougall
      <Header.Subheader>Computer Science student at University of Warwick</Header.Subheader>
    </Header>
    <div>
      <Button as="a" color='instagram' style={{marginBottom: "3.5px"}} href="https://www.instagram.com/rubendougall/">
        <Icon name='instagram'/>
        Instagram
      </Button>
      <Button as="a" color='red' style={{marginBottom: "3.5px"}} href="https://www.last.fm/user/ruben_rjd">
        <Icon name='lastfm square'/>
        Last.fm
      </Button>
      <Button as="a" color='orange' style={{marginBottom: "3.5px"}} href="https://soundcloud.com/ruben-dougall">
        <Icon name='soundcloud'/>
        SoundCloud
      </Button>
      <Button as="a" color='linkedin' style={{marginBottom: "3.5px"}} href="https://www.linkedin.com/in/rubendougall/">
        <Icon name='linkedin'/>
        LinkedIn
      </Button>
      <Button as="a" color='grey' style={{marginBottom: "3.5px"}} href="https://github.com/Ruben9922">
        <Icon name='github'/>
        GitHub
      </Button>
      <Button as="a" color='teal' style={{marginBottom: "3.5px"}} href="https://stackexchange.com/users/4703233/ruben9922">
        <Icon name='stack exchange'/>
        Stack Exchange
      </Button>
    </div>
  </Container>
)

export default IndexPage
