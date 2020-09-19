import React from 'react'
import './EntryContainer.css';
import TextEntry from '../TextEntry/TextEntry'

export default class EntryContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: ''}
    }

    //todo handlegettingstate from pieces of 
    handleText = (e) => {
        this.setState({text: e})
    }
    //todo handleSubmit

    render() {
        return (
            <div className='gridContainer'>
                <h1 className='leftText'>Left Text</h1>
                <div className='innerGrid'>
                    <TextEntry onTextChange={this.handleText}></TextEntry>

                </div>


            </div>
        )
    }
}