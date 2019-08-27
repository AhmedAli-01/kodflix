import React from 'react';
import Stack from './Stack';
import getGallery from './Gallery-get'

export default function Gallery(){
    return ( 
    <>
      <div className="container">
          {
            getGallery().map( stack => (
              < Stack 
                key={stack.id}
                id={stack.id}
                name={stack.name}
                logo={stack.logo} />
            ))
          }
      </div> 
    </>
    );
  }