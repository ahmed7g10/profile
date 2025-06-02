import React from 'react';

const Card = ({content,classn}) => {
    return (
        <div  className={`card ${classn}`}>
            {content}
        </div>
    );
}

export default Card;
