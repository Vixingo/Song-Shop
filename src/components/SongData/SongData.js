import React from "react";
import "./SongData.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
function SongData(props) {
    return (
        <>
            <div className="SongData">
                <div className="data1">
                    <p>
                        {props.song_name} - {props.artist_Name}
                    </p>{" "}
                    <div className="songdata_player">
                        <PlayArrowIcon
                            sx={{ fontSize: "30px", margin: "0 5px" }}
                        />
                        <div className="playbar">
                            <div className="playdot nos"></div>
                        </div>
                    </div>
                </div>
                <div className="data2">
                    <p>3 credits</p>
                    <div>
                        <FavoriteBorderOutlinedIcon
                            sx={{
                                fontSize: "30px",
                                margin: "7px 5px",
                                marginBottom: "0",
                                fontWeight: "bold",
                            }}
                        />
                    </div>
                    <Link to="Buy">
                        <button className="buybutton">buy</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SongData;
