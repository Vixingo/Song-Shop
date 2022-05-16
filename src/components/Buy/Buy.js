import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import "./Buy.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";
function Buy() {
    return (
        <>
            <div className="Buy">
                <h1>Add to my songs?</h1>
                <div className="song_img">
                    <div className="wishlist">
                        <StarBorderPurple500Icon sx={{ fontSize: "30px" }} />
                        <p>Wishlist</p>
                    </div>
                    <div className="song_price">€15</div>
                    <img src="/img/song_img.png" alt="" width={"100%"} />
                </div>
                <div className="song_name">SONG NAME</div>
                <div className="artist_name">Artist name</div>
                <p>Composer, Arranger</p>
                <p>Known for: Lorem ipsum Solodia</p>

                <div className="player">
                    <PlayArrowIcon sx={{ fontSize: "30px", margin: "0 5px" }} />

                    <div className="playbar">
                        <div className="playdot "></div>
                    </div>
                </div>
                <div className="btnbox">
                    <Link to="/">
                        <button> Confirm</button>
                    </Link>
                    <Link to="/get_more_songs">
                        <button>Cancel</button>
                    </Link>{" "}
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

export default Buy;
