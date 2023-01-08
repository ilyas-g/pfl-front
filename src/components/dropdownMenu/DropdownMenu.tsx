import React from 'react'
import './style.css'

// interface AppProps {
//     nameMenu: string
//     children: object
//     func: Function
// }

// const DropdownMenu:React.FC<AppProps> = ({nameMenu, children, func}) => {
const DropdownMenu = ({nameMenu, children, func}) => {
    return (
        <div className="dropdownn">
            <button className="dropbtnn" onClick={func}>{nameMenu}</button>
            <div className="dropdownn-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                {children}
            </div>
        </div>
    )
}

export default DropdownMenu;
