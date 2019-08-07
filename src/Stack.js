import React from 'react';
export default function Stack(prop) {
    return (
      <div className="item">
        <img src={prop.logo} alt={`${prop.name} logo`} />
        <div className="overlay">
          <h1>{prop.name}</h1>
        </div>
      </div>
    );
}