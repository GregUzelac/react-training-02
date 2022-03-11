import React from 'react';

const allBusinesses = [
    { name: "Grego's Refrigeration & Sons"},
    { name: "Flooring 4 Less"},
    { name: "Jimbo's Spectacularly-Famous Wings"}
  ];
  
//Before React 16.8, class-based components
export class Businesses extends React.Component {
    render() {
        return (
        <div>
            {allBusinesses.map((business, index) => (
                <div key={`business-${index}`}>{business.name}</div>                
            ))}
        </div>
        );
    }
}
