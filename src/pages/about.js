import React from 'react'
import {Container, Header, List, Card} from 'semantic-ui-react'

const AboutPage = () => (
  <Container>
    <Header as="h1">About</Header>
    <p>I am a Computer Science graduate with a passion for computer science and music.</p>

    {/*<Header as="h2">University</Header>*/}
    {/*<List bulleted>*/}
    {/*<List.Item>I am a fourth-year MEng Computer Science student at the University of Warwick.</List.Item>*/}
    {/*<List.Item>During my time here, I have gained a detailed understanding of various areas of computer science, covering both theoretical and practical aspects. These include: digital forensics, data mining, computational biology, formal languages, computer graphics, computer security and principles of programming languages.</List.Item>*/}
    {/*<List.Item>I have also worked as a tutor in lab sessions for the Programming for Computer Scientists and Functional Programming modules, assisting first-year students and answering their questions regarding exercises and coursework as well as Java, Haskell, Git and Linux in general.</List.Item>*/}
    {/*<List.Item>I participated in the J.P. Morgan Code for Good 2017 and UKIEPC 2016 & 2017 programming contests.</List.Item>*/}
    {/*</List>*/}

    <Header as="h2">University</Header>
    <p>Graduated from University of Warwick with a 2:1 in MEng Computer Science.</p>

    <p>I worked as a tutor in lab sessions for the Programming for Computer Scientists and Functional
      Programming modules, assisting first-year students and answering their questions regarding exercises and
      coursework as well as Java, Haskell, Git and Linux in general.</p>

    <p>I participated in the J.P. Morgan Code for Good 2017 and UKIEPC 2016 & 2017 programming contests.</p>

    <p>During my time here, I have gained a detailed understanding of various areas of computer science, covering both
      theoretical and practical aspects. Modules completed:</p>

    <Card.Group itemsPerRow={4}>
      <Card>
        <Card.Content>
          <Card.Header>First Year</Card.Header>
          <Card.Description>
            <List bulleted>
              <List.Item>Programming for Computer Scientists</List.Item>
              <List.Item>Design of Information Structures</List.Item>
              <List.Item>Mathematics for Computer Scientists I</List.Item>
              <List.Item>Mathematics for Computer Scientists II</List.Item>
              <List.Item>Computer Organisation and Architecture</List.Item>
              <List.Item>Professional Skills</List.Item>
              <List.Item>Web Development Technologies</List.Item>
              <List.Item>Computer Security</List.Item>
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Second Year</Card.Header>
          <Card.Description>
            <List bulleted>
              <List.Item>Operating Systems and Computer Networks</List.Item>
              <List.Item>Database Systems</List.Item>
              <List.Item>Formal Languages</List.Item>
              <List.Item>Algorithms</List.Item>
              <List.Item>Software Engineering</List.Item>
              <List.Item>Logic and Verification</List.Item>
              <List.Item>Artificial Intelligence</List.Item>
              <List.Item>Functional Programming</List.Item>
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Third Year</Card.Header>
          <Card.Description>
            <List bulleted>
              <List.Item>Project: <i>Educational Tool for Automata and Formal Languages</i>.</List.Item>
              <List.Item>Project Management for Computer Scientists</List.Item>
              <List.Item>Computer Graphics</List.Item>
              <List.Item>Compiler Design</List.Item>
              <List.Item>Advanced Databases</List.Item>
              <List.Item>Principles of Programming Languages</List.Item>
              <List.Item>Digital Forensics</List.Item>
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Fourth Year</Card.Header>
          <Card.Description>
            <List bulleted>
              <List.Item>Group project: <i>Analysis and Implementation of Smart Contracts on Blockchain Technology</i>.</List.Item>
              <List.Item>High-Performance Computing</List.Item>
              <List.Item>Formal Systems Development</List.Item>
              <List.Item>Computational Biology</List.Item>
              <List.Item>Data Mining</List.Item>
              <List.Item>Foundations of Data Analytics</List.Item>
              <List.Item>Advanced Computer Security</List.Item>
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
    <br/>

    <p>My course involved completing numerous pieces of coursework. Some allowed me to put into practice the theory
      learnt during lectures; others involved researching further into the topic and forming my own ideas. They often
      involved writing a technical report which enabled me to perfect expressing complex ideas in a clear, succinct
      way. Significant pieces of coursework included:</p>

    <List bulleted>
      <List.Item>Implementing data mining techniques, e.g., classification, evaluation, parameter tuning (grid search), dimensionality reduction, CNNs and RNNs, using Python with NumPy, Scikit-Learn, Matplotlib and Keras;</List.Item>
      <List.Item>Specifying and implementing abstract machines using Atelier B;</List.Item>
      <List.Item>Parallelising C++ programs using OpenMP and MPI;</List.Item>
      <List.Item>Preprocessing a resting-state fMRI data set using DPABI;</List.Item>
      <List.Item>Analysing fMRI data of different brain regions by computing the Granger causality in MATLAB;</List.Item>
      <List.Item>Implementing sequence analysis algorithms, e.g., Needleman-Wunsch, neighbour joining, suffix tree generation, CLUSTALW and t-SNE;</List.Item>
      <List.Item>Using MATLAB to implement digital forensics techniques, e.g., watermarking, compression-based forensics, copy-move forgery detection and source identification.</List.Item>
    </List>

    <Header as="h2">Computing</Header>
    {/*<p>I have strong software development skills and experience with a number of languages, frameworks and tools. I have worked on numerous personal software projects in my spare time. Currently these include 3D games in Unity and front-end web apps with React, but previously these have included web applications with Meteor and PHP, desktop applications in Java and C#, and drawings in Processing. For my third-year project at university I developed an educational tool for finite automata. I have also completed various pieces of coursework for university, the most recent of which include implementing several digital forensics techniques in MATLAB, producing a 3D version of Snake in C++ and solving problems with big data using Hadoop.</p>*/}
    {/*<p>Outside of computing, I love listening to house music. At the moment I like house, deep house and tech house. I also taught myself the basics of DJing.</p>*/}

    <p>I enjoy programming and work on numerous software projects in my spare time. I have strong software development skills and experience with a number of languages, frameworks and tools. My main languages are C#, Java, Python and JavaScript, but I'm also highly proficient with many others such as C/C++ and MATLAB. I'm also a daily Linux user, so I'm experienced with command-line tools, package managers and Bash scripting.</p>

    <p>I'm interested in pretty much all kinds of software, including command-line, GUI, web and 3D graphics applications. You may wish to visit the <a href={"/projects"}>Projects</a> page. I'm also interested in learning more about machine learning in Python and full-stack web applications in Django, having used these in my last year at university.</p>

    <Header as="h2">Music</Header>
    <p>Outside of computing, I love house music, especially house, tech house and deep house, but like other genres too. I produce music recreationally and have taught myself how to DJ.</p>

  </Container>
)

export default AboutPage
