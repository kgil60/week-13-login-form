import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <ul className='nav-ul'>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>Projects</li>
                    <li className='nav-link'>Contact</li>
                </ul>
            </nav>
        )
    }
}