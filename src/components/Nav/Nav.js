import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './Nav.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <Navbar className="custnav" expand='lg' variant='light'>
                    <Nav>
                        <Navbar.Brand href='/'>Journlr</Navbar.Brand>   
                    </Nav>
                    <Nav className='ml-auto'>
                        <Button href='/login'>Login</Button>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}