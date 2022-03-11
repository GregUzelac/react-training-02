import React from 'react';

//Before React 16.8, class-based components
export class Businesses extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {color: "red"};
    }*/
    render() {
        return (
        <div>
            Businesses
            <div>
                Business A
            </div>
            <div>
                Business B
            </div>
            <div>
                Business C
            </div>
        </div>
        );
    }
}
