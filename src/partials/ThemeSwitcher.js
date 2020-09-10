import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {

    render() {
        const {setTheme, DarkTheme}= this.props;
        return (
            <button onClick={setTheme} className="app__dark-mode-btn icon level-right">
                <FontAwesomeIcon icon={DarkTheme ?faSun:faMoon} color={DarkTheme?'#FFA500':'#4D5B6B'}/>
            </button>
        );
    }

}