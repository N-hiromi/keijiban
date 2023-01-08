import * as React from 'react'
//bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const Header = ()=> {
	return (
		<Navbar bg="success" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/">掲示板</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="thread/new"  style={{ textDecoration: 'none' }}>スレッドを新規作成する</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}
	
