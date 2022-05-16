import React from "react";
import ByName from "../ByName/ByName";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./songmenudetail.css";
import { Link } from "react-router-dom";

function GetMoreSongs() {
    return (
        <>
            <div className="GetMoreSongs">
                <div className="filter">
                    <a href="#A">A</a>
                    <a href="#B">B</a>
                    <a href="#C">C</a>
                    <a href="#D">D</a>
                    <a href="#E">E</a>
                    <a href="#F">F</a>
                    <a href="#G">G</a>
                    <a href="#H">H</a>
                    <a href="#I">I</a>
                    <a href="#J">J</a>
                    <a href="#K">K</a>
                    <a href="#L">L</a>
                    <a href="#M">M</a>
                    <a href="#N">N</a>
                    <a href="#O">O</a>
                    <a href="#P">P</a>
                    <a href="#Q">Q</a>
                    <a href="#R">R</a>
                    <a href="#S">S</a>
                    <a href="#T">T</a>
                    <a href="#U">U</a>
                    <a href="#V">V</a>
                    <a href="#W">W</a>
                    <a href="#X">X</a>
                    <a href="#Y">Y</a>
                    <a href="#Z">Z</a>
                </div>
                <div className="filter_output">
                    <ByName id="A" />
                    <ByName id="B" />
                    <ByName id="C" />
                    <ByName id="D" />
                    <ByName id="E" />
                    <ByName id="F" />
                    <ByName id="G" />
                    <ByName id="H" />
                    <ByName id="I" />
                    <ByName id="J" />
                    <ByName id="K" />
                    <ByName id="L" />
                    <ByName id="M" />
                    <ByName id="N" />
                    <ByName id="O" />
                    <ByName id="P" />
                    <ByName id="Q" />
                    <ByName id="R" />
                    <ByName id="S" />
                    <ByName id="T" />
                    <ByName id="U" />
                    <ByName id="V" />
                    <ByName id="W" />
                    <ByName id="X" />
                    <ByName id="Y" />
                    <ByName id="Z" />
                </div>
                <Link to="filter">
                    <div className="searchbar">
                        <SearchSharpIcon
                            sx={{ width: "30px", height: "30px" }}
                        />
                        <input type="text" />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default GetMoreSongs;
