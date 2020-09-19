import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Popover from 'react-bootstrap/Popover'
import Row from 'react-bootstrap/Row'
import './Home.css'


export default class HomeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={date: new Date(), scroll: 0, inputDate: new Date()};
        
    }

    datePickerHandler= (e) => {
        this.setState({inputDate: e.target.value})
    }

    render(){

        return(
            <Container >
                <Row className='justify-content-center'> 
                    <h1>This is a homepage, duh</h1>
                </Row>
                <Row className='justify-content-center'>
                    <h1>Today is {this.state.date.toLocaleDateString()}</h1>
                </Row>
                <Row className='justify-content-center'>
                    <OverlayTrigger trigger='click' placement='bottom' overlay={
                        <Popover>
                            <Popover.Title>Choose a past date</Popover.Title>
                            <Popover.Content>
                                <input type='date' onChange={this.datePickerHandler}></input>
                            </Popover.Content>
                        </Popover>
                    }>
                        <Button size='lg' className="mr-1">Past Entries</Button>
                    </OverlayTrigger>
                    <Button size='lg' href='/create'>New Entry</Button>
                </Row>
            </Container>
        )
    }
}