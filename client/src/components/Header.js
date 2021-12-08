import React from "react";
import '../CSS_pages/Header.css';
import screenShot from './images/Screen Shot 2021-12-05 at 12.10 1.png';
import selected from './images/Selected.png';
import input_box from './images/input_box.png';

function Header() {
    return (
    <div className = "Header">
        <div className = "header">
            <div className = "logo">
                <img src={screenShot} alt=""/>
            </div>
        </div>
        <div className = "selected">
            <img src={selected} alt=""/>
        </div>
        <div className = "need_help">
            <img src={input_box}/>
        </div>
    </div>
    );
}

export default Header;