import React from 'react'
import './style.css'

interface Props_DropdownMenu {
    func: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children?: JSX.Element | JSX.Element[];
    nameMenu: string
}

const DropdownMenu = ({nameMenu, children, func}: Props_DropdownMenu) => {
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
