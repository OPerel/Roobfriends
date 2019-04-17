import React, { Component } from 'react';

class Hello extends Component {
    render () {
        return (
            <div className='tc ph4'>
                <h1 className='class="f3 f2-m f1-l fw2 black-90 mv3'>Hello World</h1>
                <p className='f5 f4-m f3-l fw2 black-50 mt0 lh-copy'>{this.props.greet}</p>
            </div>
        )
    }
}

export default Hello;
