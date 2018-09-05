import React from 'react'
import {Container, Header, Icon, Label, List} from 'semantic-ui-react'

const ProjectsPage = () => (
  <Container>
    <Header as="h1">Projects</Header>
    This page lists the main projects I have been working on. A more complete list, including many unfinished projects, can be found on <a href="https://github.com/Ruben9922">GitHub</a>.

    <Header as="h2">Desktop Apps</Header>
    <List relaxed divided>
      <List.Item>
        <List.Content>
          <List.Header>
            Automaton Tool
            &nbsp;
            <Label horizontal color="blue">
              Java, JavaFX
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/automaton-tool">
              <Icon name='github'/>
              GitHub
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/automaton-tool/releases">
              <Icon name='download'/>
              Download
            </Label>
          </List.Header>
          <List.Description>
            Educational tool for finite automata, developed for my third year project at university. By far the most sizable project I have worked on.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            RPN Calculator
            &nbsp;
            <Label horizontal color="blue">
              Java, JavaFX
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/rpn-calculator">
              <Icon name='github'/>
              GitHub
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/rpn-calculator/releases">
              <Icon name='download'/>
              Download
            </Label>
          </List.Header>
          <List.Description>
            Simple RPN calculator that evaluates a given postfix (RPN) expression and converts it to infix and prefix
            (PN) notation.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>

    <Header as="h2">Web Apps</Header>
    <List relaxed divided>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href="https://ruben9922.github.io/fast-click-game/">
              Fast Click Game
            </a>
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
              JS, React
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/fast-click-game">
              <Icon name='github'/>
              GitHub
            </Label>
          </List.Header>
          <List.Description>
            Simple fast click game.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href="https://ruben9922.github.io/permissions-calculator/">
              Unix Permissions Calculator
            </a>
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
              JS, React
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/permissions-calculator">
              <Icon name='github'/>
              GitHub
            </Label>
          </List.Header>
          <List.Description>
            Convert between different notations for Unix permissions.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>

    <Header as="h2">Store Apps</Header>
    <List relaxed divided>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href="https://play.google.com/store/apps/details?id=com.ruben9922.binaryconverter">
              Binary Converter
            </a>
            &nbsp;
            <Label horizontal color="blue">
              Java
            </Label>
          </List.Header>
          <List.Description>
            Convert between different numeral systems (decimal, binary, octal, hex or any other between base 2 and base
            36).
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href="https://play.google.com/store/apps/details?id=com.ruben9922.superclick">
              Super Click (Android)
            </a>
            &nbsp;
            <Label horizontal color="blue">
              Java
            </Label>
          </List.Header>
          <List.Description>
            Simple fast click game.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href="https://www.microsoft.com/en-gb/p/super-click/9wzdncrfjtrq">
              Super Click (Windows)
            </a>
            &nbsp;
            <Label horizontal color="blue">
              C#
            </Label>
          </List.Header>
          <List.Description>
            Simple fast click game.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>

    <Header as="h2">Other</Header>
    <List relaxed divided>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href="http://cs139.dcs.warwick.ac.uk/~u1515474/cs139/coursework/index.php">
              Bill Splitter
            </a>
            &nbsp;
            <Label horizontal color="blue">
              PHP, SQLite
            </Label>
          </List.Header>
          <List.Description>
            Bill splitting application, built as part of a web development module in my first year at university.
            <br/>
            <strong>
              <Icon name='warning circle'/>
              Error messages aren't always displayed, so if nothing happens after pressing a button, please check
              the entered information is valid and try again.
            </strong>
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href="http://cs139.dcs.warwick.ac.uk/~u1515474/cs139/test/quadraticsolver.php">
              Quadratic Solver
            </a>
            &nbsp;
            <Label horizontal color="blue">
              PHP
            </Label>
          </List.Header>
          <List.Description>
            Find the solution of quadratic equations.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Container>
)

export default ProjectsPage
