import React, { Component } from 'react'

export default class DestinationData extends Component {
    render() {
        

        return (
        <div className={this.props.cName}>
            <div className='desc-text'>
            <h1>{this.props.heading}</h1>
            <p>
            {this.props.text}
            </p>
            </div>
            <div className='desc-image'>
                <img  src={this.props.image1} alt='Images' />
                <img  src={this.props.image2}  alt='Images'/>
            </div>
        </div>
        )
    }
}
