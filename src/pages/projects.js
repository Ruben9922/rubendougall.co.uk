import React from 'react'
import {Container, Header, Icon, Label, List} from 'semantic-ui-react'

const ProjectsPage = () => (
  <Container>
    <Header as="h1">Projects</Header>
    This page lists some of the main projects I have been working on. A more complete list, including many unfinished projects, can be found on <a href="https://github.com/Ruben9922">GitHub</a>.

    <Header as="h2">Desktop Apps</Header>
    <List relaxed divided>
      <List.Item>
        <List.Content>
          <List.Header>
            Automaton Tool
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
              Java, JavaFX
            </Label>
          </List.Header>
          <List.Description>
            Educational tool for finite automata, developed for my third year project at university. It's certainly one of the most sizable projects I've worked on. I'll create a more modern (possibly web-based) remake of this at some point.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            RPN Calculator
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
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
      <List.Item>
        <List.Content>
          <List.Header>
            Snake Command-Line Game
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
              C++
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/snake-cmd">
              <Icon name='github'/>
              GitHub
            </Label>
            <Label horizontal color="orange">
              <Icon name='circle notched'/>
              In development
            </Label>
          </List.Header>
          <List.Description>
            Command-line version of the classic Snake game.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>

    <Header as="h2">Web Apps</Header>
    <List relaxed divided>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href={"/projects/fast-click-game/"}>
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
            <a href={"/projects/permissions-calculator/"}>
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
      <List.Item>
        <List.Content>
          <List.Header>
            <a href={"/projects/click-game/"}>
              Click Game
            </a>
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
              JS, React
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/click-game">
              <Icon name='github'/>
              GitHub
            </Label>
          </List.Header>
          <List.Description>
            Incremental game in which you build up your score by pressing a button or purchasing in-game items.
            <br/>
            <strong>
              <Icon name='warning circle'/>
              Note that game progress is currently not saved, so any progress will be lost upon refreshing or closing the page. This is something I plan to add in future.
            </strong>
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href={"/projects/wordsearch/"}>
              Wordsearch Generator
            </a>
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
              JS, React
            </Label>
            <Label horizontal color="black" href="https://github.com/Ruben9922/wordsearch">
              <Icon name='github'/>
              GitHub
            </Label>
          </List.Header>
          <List.Description>
            Generate a wordsearch from a list of words.
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
              <Icon name="code"/>
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
              <Icon name="code"/>
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
              <Icon name="code"/>
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
              <Icon name="code"/>
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
              Quadratic Equation Solver
            </a>
            &nbsp;
            <Label horizontal color="blue">
              <Icon name="code"/>
              PHP
            </Label>
          </List.Header>
          <List.Description>
            Find the solution of quadratic equations. I'll make a React version of this at some point, which will make use of MathJax.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Container>
)

export default ProjectsPage
