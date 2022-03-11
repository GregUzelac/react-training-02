import React from 'react';

const allBusinesses = [
    "GFT Refrigeration & Sons",
    "Flooring For Less",
    "Jim's Famous Hot Wings"
  ];
  
//Before React 16.8, class-based components
export class Businesses extends React.Component {
    render() {
        return (
        <div>
            <p>Businesses</p>
            {allBusinesses.map((business, index) => (
                <div key={`business-${index}`}>{business}</div>                
            ))}
        </div>
        );
    }
}
