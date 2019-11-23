import React from 'react';
import resolver from '../../resolver';


const Image = ({name}) => { 
    const imgSrc = resolver[name]
    
    return (
        <img 
            alt="alt"
            src={imgSrc}
            style={{width: "100%"}}
        ></img>
    );
}   

export default Image;