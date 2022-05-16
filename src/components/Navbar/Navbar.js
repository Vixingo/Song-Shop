import "./navbar.css";
import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const [toggleState, setToggleState] = useState(2);
    const [togglelang, setTogglelang] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <nav className="navigation">
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <MenuIcon />

                {/* <i class="fa-solid fa-bars" style={{ fontWeight: "bold" }}></i>{" "} */}
            </button>
            <div
                className={
                    isNavExpanded
                        ? "navigation-menu expanded"
                        : "navigation-menu"
                }
            >
                <ul>
                    <li
                        className={toggleState === 1 ? "active" : "normal"}
                        onClick={() => toggleTab(1)}
                    >
                        <Link to="/player">player</Link>
                    </li>
                    <li
                        className={toggleState === 2 ? "active" : "normal"}
                        onClick={() => toggleTab(2)}
                    >
                        <Link to="/">songs </Link>
                    </li>
                    <li
                        className={toggleState === 3 ? "active" : "normal"}
                        onClick={() => toggleTab(3)}
                    >
                        <Link to="/Newsfeed">newsfeed</Link>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href="#"
                            className={togglelang === 1 ? "active" : "normal"}
                            onClick={() => setTogglelang(1)}
                            style={{ padding: "0 10px" }}
                        >
                            {" "}
                            ENG
                        </a>{" "}
                        -{" "}
                        <a
                            href="#"
                            className={togglelang === 2 ? "active" : "normal"}
                            onClick={() => setTogglelang(2)}
                            style={{ padding: "0 10px" }}
                        >
                            {" "}
                            NL{" "}
                        </a>{" "}
                        -{" "}
                        <a
                            href="#"
                            className={togglelang === 3 ? "active" : "normal"}
                            onClick={() => setTogglelang(3)}
                            style={{ padding: "0 10px" }}
                        >
                            {" "}
                            FR
                        </a>
                    </li>
                </ul>
                {/* <div className="profile">
                    <i class="fa-regular fa-user"></i>
                </div> */}
                <div>
                    <AccountCircleOutlinedIcon
                        sx={{
                            width: "35px",
                            height: "35px",
                            fontSize: "35px",
                        }}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
