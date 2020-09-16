import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Popover from 'react-bootstrap/Popover'

export default class HomeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }

    render(){
        return(
            <Container className='text-center'>
                <h1>This is a homepage, duh</h1>
                <h1>Today is {this.state.date.toLocaleDateString()}</h1>

                <OverlayTrigger trigger='click' placement='bottom' overlay={
                    <Popover>
                        <Popover.Title>Choose a past date</Popover.Title>
                        <Popover.Content>
                            <input type='date'></input>
                        </Popover.Content>
                    </Popover>
                }>
                    <Button size='lg' className="mr-1">Past Entries</Button>
                </OverlayTrigger>
                <Button size='lg' className="">New Entry</Button>
            </Container>
        )
    }
}