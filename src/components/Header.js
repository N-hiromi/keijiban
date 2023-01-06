import * as React from 'react'
//bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = ()=> {
	return (
		<Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="/">掲示板</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
	)
}
	
