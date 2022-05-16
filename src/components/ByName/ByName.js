import React from "react";
import SongData from "../SongData/SongData";
import "./ByName.css";
import songnames from "../../songnames.json";
function ByName(props) {
    return (
        <>
            <div id={props.id} className="ByName">
                <h1>{props.id}</h1>

                {songnames.map((data, index) => {
                    return (
                        <>
                            {data.songName[0].includes(props.id) ? (
                                <SongData
                                    song_name={data.songName}
                                    artist_Name={data.artistName}
                                />
                            ) : (
                                ""
                            )}
                        </>
                    );
                })}

                {/* <SongData song_name="naz" />
                <SongData />
                <SongData />
                <SongData />
                <SongData />
                <SongData />
                <SongData /> */}
            </div>
        </>
    );
}

export default ByName;
