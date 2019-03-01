import React from 'react'
import {Container, Header, List, Card} from 'semantic-ui-react'

const AboutPage = () => (
  <Container>
    <Header as="h1">About</Header>
    <p>I am a Computer Science student with a passion for computer science (unsurprisingly) and music. </p>

    {/*<Header as="h2">University</Header>*/}
    {/*<List bulleted>*/}
    {/*<List.Item>I am a fourth-year MEng Computer Science student at the University of Warwick.</List.Item>*/}
    {/*<List.Item>During my time here, I have gained a detailed understanding of various areas of computer science, covering both theoretical and practical aspects. These include: digital forensics, data mining, computational biology, formal languages, computer graphics, computer security and principles of programming languages.</List.Item>*/}
    {/*<List.Item>I have also worked as a tutor in lab sessions for the Programming for Computer Scientists and Functional Programming modules, assisting first-year students and answering their questions regarding exercises and coursework as well as Java, Haskell, Git and Linux in general.</List.Item>*/}
    {/*<List.Item>I participated in the J.P. Morgan Code for Good 2017 and UKIEPC 2016 & 2017 programming contests.</List.Item>*/}
    {/*</List>*/}

    <Header as="h2">University</Header>
    <p>I am a fourth-year MEng Computer Science student at the University of Warwick.</p>
    <p>During my time here, I have gained a detailed understanding of various areas of computer science, covering both theoretical and practical aspects. These include: digital forensics, data mining, computational biology, formal languages, computer graphics, computer security, principles of programming languages and many others.</p>
    <p>My course involved completing numerous pieces of coursework. Some allowed me to put into practice the theory learnt during lectures; others involved researching further into the topic and forming my own ideas. They often involved writing a technical report which enabled me to practise expressing complex ideas in a clear, succinct way. Recent pieces of coursework include: using Atelier B to specify and implement abstract machines, parallelising a C++ program using OpenMP and preprocessing a resting state fMRI data set using DPABI.</p>
    <p>I have also worked as a tutor in lab sessions for the Programming for Computer Scientists and Functional Programming modules, assisting first-year students and answering their questions regarding exercises and coursework as well as Java, Haskell, Git and Linux in general.</p>
    <p>I participated in the J.P. Morgan Code for Good 2017 and UKIEPC 2016 & 2017 programming contests.</p>

    <Header as="h2">Computing</Header>
    {/*<p>I have strong software development skills and experience with a number of languages, frameworks and tools. I have worked on numerous personal software projects in my spare time. Currently these include 3D games in Unity and front-end web apps with React, but previously these have included web applications with Meteor and PHP, desktop applications in Java and C#, and drawings in Processing. For my third-year project at university I developed an educational tool for finite automata. I have also completed various pieces of coursework for university, the most recent of which include implementing several digital forensics techniques in MATLAB, producing a 3D version of Snake in C++ and solving problems with big data using Hadoop.</p>*/}
    {/*<p>Outside of computing, I love listening to house music. At the moment I like house, deep house and tech house. I also taught myself the basics of DJing.</p>*/}

    <p>I enjoy programming and work on numerous software projects in my spare time. I have strong software development skills and experience with a number of languages, frameworks and tools. My main languages are C#, Java, Python and JavaScript, but I'm also highly proficient with others such as C/C++ and MATLAB.</p>

    <p>I'm interested in pretty much all kinds of software, but particularly web apps and games currently. Recently I've been working on making client-side web apps using React and 3D games in Unity. Even more recently, I'm also interested in machine learning with Python and full-stack web applications using Django. I look forward to start working on these soon in addition to continuing my existing projects.</p>

    <Header as="h2">Music</Header>
    <p>Outside of computing, I really love house music, especially house, tech house and deep house. I produce music recreationally and have taught myself how to DJ.</p>

    {/*<p>More specifically, I have taken the following modules:</p>*/}
    {/*<Card.Group itemsPerRow={4}>*/}
    {/*<Card>*/}
    {/*<Card.Content>*/}
    {/*<Card.Header>First Year</Card.Header>*/}
    {/*<Card.Description>*/}
    {/*<List bulleted>*/}
    {/*<List.Item>Programming for Computer Scientists</List.Item>*/}
    {/*<List.Item>Design of Information Structures</List.Item>*/}
    {/*<List.Item>Mathematics for Computer Scientists I</List.Item>*/}
    {/*<List.Item>Mathematics for Computer Scientists II</List.Item>*/}
    {/*<List.Item>Computer Organisation and Architecture</List.Item>*/}
    {/*<List.Item>Professional Skills</List.Item>*/}
    {/*<List.Item>Web Development Technologies</List.Item>*/}
    {/*<List.Item>Computer Security</List.Item>*/}
    {/*</List>*/}
    {/*</Card.Description>*/}
    {/*</Card.Content>*/}
    {/*</Card>*/}
    {/*<Card>*/}
    {/*<Card.Content>*/}
    {/*<Card.Header>Second Year</Card.Header>*/}
    {/*<Card.Description>*/}
    {/*<List bulleted>*/}
    {/*<List.Item>Operating Systems and Computer Networks</List.Item>*/}
    {/*<List.Item>Database Systems</List.Item>*/}
    {/*<List.Item>Formal Languages</List.Item>*/}
    {/*<List.Item>Algorithms</List.Item>*/}
    {/*<List.Item>Software Engineering</List.Item>*/}
    {/*<List.Item>Logic and Verification</List.Item>*/}
    {/*<List.Item>Artificial Intelligence</List.Item>*/}
    {/*<List.Item>Functional Programming</List.Item>*/}
    {/*</List>*/}
    {/*</Card.Description>*/}
    {/*</Card.Content>*/}
    {/*</Card>*/}
    {/*<Card>*/}
    {/*<Card.Content>*/}
    {/*<Card.Header>Third Year</Card.Header>*/}
    {/*<Card.Description>*/}
    {/*<List bulleted>*/}
    {/*<List.Item>Project: <i>Educational Tool for Automata and Formal Languages</i>.</List.Item>*/}
    {/*<List.Item>Project Management for Computer Scientists</List.Item>*/}
    {/*<List.Item>Computer Graphics</List.Item>*/}
    {/*<List.Item>Compiler Design</List.Item>*/}
    {/*<List.Item>Advanced Databases</List.Item>*/}
    {/*<List.Item>Principles of Programming Languages</List.Item>*/}
    {/*<List.Item>Digital Forensics</List.Item>*/}
    {/*</List>*/}
    {/*</Card.Description>*/}
    {/*</Card.Content>*/}
    {/*</Card>*/}
    {/*<Card>*/}
    {/*<Card.Content>*/}
    {/*<Card.Header>Fourth Year</Card.Header>*/}
    {/*<Card.Description>*/}
    {/*<List bulleted>*/}
    {/*<List.Item>Group project: <i>Analysis and Implementation of Smart Contracts on Blockchain Technology</i>.</List.Item>*/}
    {/*<List.Item>High-Performance Computing</List.Item>*/}
    {/*<List.Item>Formal Systems Development</List.Item>*/}
    {/*<List.Item>Computational Biology</List.Item>*/}
    {/*<List.Item>Data Mining</List.Item>*/}
    {/*<List.Item>Foundations of Data Analytics</List.Item>*/}
    {/*<List.Item>Advanced Computer Security</List.Item>*/}
    {/*</List>*/}
    {/*</Card.Description>*/}
    {/*</Card.Content>*/}
    {/*</Card>*/}
    {/*</Card.Group>*/}

  </Container>
)

export default AboutPage
