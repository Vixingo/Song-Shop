import React, { useEffect, useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CachedIcon from "@mui/icons-material/Cached";
import "./Filter.css";
import { Link } from "react-router-dom";
import FilteredList from "./FilteredList";
function Filter({ setData }) {
    const [price, setPrice] = useState("hide");
    const [active, setActive] = useState("");
    const [active2, setActive2] = useState("");
    const [active3, setActive3] = useState("");
    const [active4, setActive4] = useState("");
    const [active5, setActive5] = useState("");
    const [active6, setActive6] = useState("");
    const [active7, setActive7] = useState("");
    const [active8, setActive8] = useState("");
    const [active9, setActive9] = useState("");
    const [active10, setActive10] = useState("");
    const [voice, setVoice] = useState("");
    const [genre, setGenre] = useState("");
    const [theme, setTheme] = useState("");
    const [tempo, setTempo] = useState("");
    const [range, setRange] = useState();

    // const [fchoir, setFchoir] = useState([]);

    const [searchString, setSearchString] = useState("");

    // useEffect(() => {
    //     console.log(fchoir);
    // });

    const dofilter = () => {
        const FD = [];
        if (searchString !== "") {
            FD.push(searchString);
            console.log(FD);
        }

        if (active !== "") {
            FD.push("Mixed Choir");
        }
        if (active2 !== "") {
            FD.push("Women’s choir");
        }

        if (active3 !== "") {
            FD.push("Men’s choir");
        }

        if (active4 !== "") {
            FD.push("Children’s choir");
        }
        if (active5 !== "") {
            FD.push("nl");
        }
        if (active6 !== "") {
            FD.push("eng");
        }
        if (active7 !== "") {
            FD.push("fr");
        }
        if (active8 !== "") {
            FD.push("es");
        }
        if (active9 !== "") {
            FD.push("de");
        }
        if (active10 !== "") {
            FD.push("it");
        }
        if (voice !== "") {
            FD.push(voice);
        }
        if (genre !== "") {
            FD.push(genre);
        }
        if (theme !== "") {
            FD.push(theme);
        }
        if (tempo !== "") {
            FD.push(tempo);
        }
        if (range == 0) {
            console.log("lll");
            FD.push("Beginner");
        }
        if (range == 1) {
            console.log("in");
            FD.push("Intermediate");
        }
        if (range == 2) {
            console.log("ad");
            FD.push("Advanced");
        }

        //  else {
        //     console.log("not clicked");
        // }

        setData(FD);
    };

    useEffect(() => {
        console.log(range);
    });
    return (
        <>
            <div className="Filter">
                <div className="search">
                    <h1>seacrh</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="main_search">
                                <input
                                    type="text"
                                    placeholder="Song name, artist name, composer or arranger"
                                    autoFocus="true"
                                    value={searchString}
                                    onChange={(e) =>
                                        setSearchString(e.target.value)
                                    }
                                />
                                <SearchSharpIcon
                                    sx={{ width: "30px", height: "30px" }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6">
                                    <div className="main_price">
                                        <div
                                            className="price"
                                            onClick={() => {
                                                price === "hide"
                                                    ? setPrice("show")
                                                    : setPrice("hide");
                                            }}
                                        >
                                            <ArrowDropDownIcon />
                                            <p> price</p>
                                        </div>
                                        <div
                                            className={
                                                price === "hide"
                                                    ? "inactive"
                                                    : "active_price"
                                            }
                                        >
                                            <div className="row">
                                                <div className="col">
                                                    {" "}
                                                    <input
                                                        type="range"
                                                        min={1}
                                                        max={15}
                                                        className="slider"
                                                    />
                                                    <div className="slider_size">
                                                        <p>0</p>
                                                        <p>15</p>
                                                    </div>
                                                </div>

                                                <CachedIcon
                                                    sx={{
                                                        fontSize: "30px",
                                                        margin: "0 5px",
                                                    }}
                                                />
                                            </div>
                                            <div className="slider_size">
                                                <a href="#">euro</a>
                                                <a
                                                    href="#"
                                                    onClick={() => {
                                                        price === "hide"
                                                            ? setPrice("show")
                                                            : setPrice("hide");
                                                    }}
                                                >
                                                    <u>apply</u>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <h1>ensemble</h1>
                    <div className="row">
                        <div
                            className={
                                active === ""
                                    ? "col-md slt_btn "
                                    : "col-md slt_btn active_btn"
                            }
                            onClick={() => {
                                active === ""
                                    ? setActive("active_btn")
                                    : setActive("");
                            }}
                        >
                            <p>Mixed choir</p>
                        </div>
                        <div
                            className={
                                active2 === ""
                                    ? "col-md slt_btn "
                                    : "col-md slt_btn active_btn"
                            }
                            onClick={() => {
                                active2 === ""
                                    ? setActive2("active_btn")
                                    : setActive2("");
                            }}
                        >
                            <p>Womens choir</p>
                        </div>
                        <div
                            className={
                                active3 === ""
                                    ? "col-md slt_btn "
                                    : "col-md slt_btn active_btn"
                            }
                            onClick={() => {
                                active3 === ""
                                    ? setActive3("active_btn")
                                    : setActive3("");
                            }}
                        >
                            <p>Men’s choir</p>
                        </div>
                        <div
                            className={
                                active4 === ""
                                    ? "col-md slt_btn "
                                    : "col-md slt_btn active_btn"
                            }
                            onClick={() => {
                                active4 === ""
                                    ? setActive4("active_btn")
                                    : setActive4("");
                            }}
                        >
                            <p>Children’s choir</p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <h1>voicing</h1>
                            <div className="custom_select">
                                <ArrowDropDownIcon className="custom_icon" />
                                <select
                                    value={voice}
                                    onChange={(e) => setVoice(e.target.value)}
                                >
                                    <option value="">Select voicing</option>
                                    <option value="unison">unison</option>
                                    <option value="2-part">2-part</option>
                                    <option value="3-part">3-part</option>
                                    <option value="SA">SA</option>
                                    <option value="SATB">SATB</option>
                                    <option value="SATB divisi">
                                        SATB divisi
                                    </option>
                                    <option value="SAB">SAB</option>
                                    <option value="SSA divisi">
                                        SSA divisi
                                    </option>
                                    <option value="TB">TB</option>
                                    <option value="TTB/TBB">TTB/TBB</option>
                                    <option value="TTBB">TTBB</option>
                                    <option value="TTBB divisi">
                                        TTBB divisi
                                    </option>
                                    <option value="double choir">
                                        Double choir
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>genre</h1>
                            <div className="custom_select">
                                <ArrowDropDownIcon className="custom_icon" />
                                <select
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                >
                                    <option value="">Select genre</option>
                                    <option value="Pop & Rock">
                                        Pop & rock
                                    </option>
                                    <option value="Film">Film</option>
                                    <option value="TV & Musical">
                                        TV & Musical
                                    </option>

                                    <option value="Sacred">Sacred</option>
                                    <option value="Contemporary">
                                        contemporary
                                    </option>

                                    <option value="Barbershop">
                                        Barbershop
                                    </option>
                                    <option value="Classical">Classical</option>
                                    <option value="Children">Children</option>
                                    <option value="Latin">Latin</option>
                                    <option value="Country">Country</option>
                                    <option value="Blues">Blues</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="World">World</option>
                                    <option value="Opera">Opera</option>
                                    <option value="R&B/Soul">R&B/Soul</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Theme</h1>
                            <div className="custom_select">
                                <ArrowDropDownIcon className="custom_icon" />
                                <select
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)}
                                >
                                    <option value="">Select theme</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Christmas">Christmas</option>
                                    <option value="Holiday">Holiday</option>
                                    <option value="Medley">medley</option>
                                    <option value="Funeral/Memorial">
                                        funeral/memorial
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>tempo</h1>
                            <div className="custom_select">
                                <ArrowDropDownIcon className="custom_icon" />
                                <select
                                    value={tempo}
                                    onChange={(e) => setTempo(e.target.value)}
                                >
                                    <option value="">Select tempo</option>

                                    <option value="Ballad">Ballad</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Up tempo">up tempo</option>

                                    <option value="Changing">Changing</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <h1>language</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div
                                            className={
                                                active5 === ""
                                                    ? "col slt_btn "
                                                    : "col slt_btn active_btn"
                                            }
                                            onClick={() => {
                                                active5 === ""
                                                    ? setActive5("active_btn")
                                                    : setActive5("");
                                            }}
                                        >
                                            nl
                                        </div>
                                        <div
                                            className={
                                                active6 === ""
                                                    ? "col slt_btn "
                                                    : "col slt_btn active_btn"
                                            }
                                            onClick={() => {
                                                active6 === ""
                                                    ? setActive6("active_btn")
                                                    : setActive6("");
                                            }}
                                        >
                                            eng
                                        </div>
                                        <div
                                            className={
                                                active7 === ""
                                                    ? "col slt_btn "
                                                    : "col slt_btn active_btn"
                                            }
                                            onClick={() => {
                                                active7 === ""
                                                    ? setActive7("active_btn")
                                                    : setActive7("");
                                            }}
                                        >
                                            fr
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div
                                            className={
                                                active8 === ""
                                                    ? "col slt_btn "
                                                    : "col slt_btn active_btn"
                                            }
                                            onClick={() => {
                                                active8 === ""
                                                    ? setActive8("active_btn")
                                                    : setActive8("");
                                            }}
                                        >
                                            es
                                        </div>
                                        <div
                                            className={
                                                active9 === ""
                                                    ? "col slt_btn "
                                                    : "col slt_btn active_btn"
                                            }
                                            onClick={() => {
                                                active9 === ""
                                                    ? setActive9("active_btn")
                                                    : setActive9("");
                                            }}
                                        >
                                            de
                                        </div>
                                        <div
                                            className={
                                                active10 === ""
                                                    ? "col slt_btn "
                                                    : "col slt_btn active_btn"
                                            }
                                            onClick={() => {
                                                active10 === ""
                                                    ? setActive10("active_btn")
                                                    : setActive10("");
                                            }}
                                        >
                                            it
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>level</h1>
                            <div className="custom_range">
                                <input
                                    type="range"
                                    min={"0"}
                                    max={"2"}
                                    value={range}
                                    onChange={(e) => setRange(e.target.value)}
                                    className="slider"
                                />
                                <div className="bia">
                                    <span>|</span>

                                    <span>|</span>
                                    <span>|</span>
                                </div>
                                <div className="bia">
                                    <p>beginner</p>
                                    <p>Intermediate</p>
                                    <p>advanced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btnbox">
                        <Link
                            to="/get_more_songs/filtered_list"
                            onClick={() => dofilter()}
                        >
                            <button> apply</button>
                        </Link>
                        <Link
                            to="/get_more_songs/filter"
                            onClick={() => {
                                window.location.reload();
                            }}
                        >
                            <button>reset</button>
                        </Link>{" "}
                    </div>
                </div>
                <Link to="/get_more_songs">
                    <div className="back_button">
                        <PlayArrowIcon sx={{ fontSize: "50px" }} />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Filter;
