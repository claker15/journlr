import React from 'react'

export default class TextEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state={text: ''}
    }
    handleChange = (e) => this.props.onTextChange(e.target.value)

    render() {
        return (
            <textarea onChange={this.handleChange}></textarea>
        )
    }
}