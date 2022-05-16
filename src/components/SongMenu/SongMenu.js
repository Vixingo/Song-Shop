import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./songMenu.css";
function SongMenu() {
    const [toggleMenu, setToggleMenu] = useState(1);
    const toggleTab = (index) => {
        setToggleMenu(index);
    };
    return (
        <>
            <div className="SongMenu">
                <h1>songs</h1>
                <ul>
                    <li
                        className={toggleMenu === 1 ? "active" : "normal"}
                        onClick={() => toggleTab(1)}
                    >
                        <Link to="/">my songs</Link>
                    </li>
                    <li
                        className={toggleMenu === 2 ? "active" : "normal"}
                        onClick={() => toggleTab(2)}
                    >
                        <Link to="/my_playlists">my playlist</Link>
                    </li>
                    <li
                        className={toggleMenu === 3 ? "active" : "normal"}
                        onClick={() => toggleTab(3)}
                    >
                        <Link to="/get_more_songs">Get more songs</Link>
                    </li>
                </ul>
                <a href="#" className="getMore">
                    355 streams - get more
                </a>
            </div>
        </>
    );
}

export default SongMenu;
