import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img
            src={`https://robohash.org/${name}?size=220x220`}
            alt={`robot ${id}`}
            style={{ height: '100%' }}
            />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
