import React from 'react';
import ReactDOM from 'react';
import './App.css';
import { ButtonInfo, ButtonPrimary, ButtonSecondary, ButtonSuccess, ButtonDanger, ButtonWarning } from './Buttons.js';
import { Businesses } from './Businesses.js';

function showBusinesses(e) {
    ReactDOM.render(<Businesses />, document.getElementById('root'));        
}
export function LoggedIn() {
    return (
        <div> {/* TODO Convert to a NAV where each NAV item opens a diff page */}
            <ButtonPrimary title="View businesses" onClick={showBusinesses}/>
            <ButtonSecondary title="View plants" />
            <ButtonSuccess title="View machines"/>
            <ButtonDanger title="View parts"/>
            <ButtonWarning title="View repairs"/>
            <ButtonInfo title="Scan a QR code"/>
        </div>
    )
}
