import './App.css';
import { ButtonInfo, ButtonPrimary, ButtonSecondary, ButtonSuccess, ButtonDanger, ButtonWarning } from './Buttons.js';

export function LoggedIn() {
    return (
        <div> {/* TODO Convert to a NAV where each NAV item opens a diff page */}
            <ButtonPrimary title="View businesses" />
            <ButtonSecondary title="View plants" />
            <ButtonSuccess title="View machines"/>
            <ButtonDanger title="View parts"/>
            <ButtonWarning title="View repairs"/>
            <ButtonInfo title="Scan a QR code"/>
        </div>
    )
}
