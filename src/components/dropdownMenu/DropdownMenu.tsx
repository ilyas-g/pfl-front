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
            <button className="dropbtnn" onClick={func}>{nameMenu} <i className='icon-arrow-down'></i></button>
            <div className="dropdownn-content">
                {children}
            </div>
        </div>
    )
}

export default DropdownMenu;
