import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll',
            height: '450px',
            backgroundColor: '#ecffd8'
        }}>
            {props.children}
        </div>
    );
};

export default Scroll;
