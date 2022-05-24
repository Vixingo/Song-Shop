import React, { useEffect, useState } from "react";
import "./Filter.css";
import songnames from "../../songnames.json";
import SongData from "../SongData/SongData";

function FilteredItem({ keyw }) {
    const [searched, setSearched] = useState([]);
    // for searchbar
    const name = songnames.filter(function (e) {
        return (
            e.songName.toLowerCase().includes(keyw.toLowerCase()) ||
            e.artistName.toLowerCase().includes(keyw.toLowerCase())
        );
    });
    console.log(name);
    // for choire
    const choir = songnames.filter(function (e) {
        return e.ensemble === keyw;
    });

    console.log(choir);
    // for language
    const language = songnames.filter(function (e) {
        return e.Language === keyw;
    });

    console.log(language);

    // for voice
    const voice = songnames.filter(function (e) {
        return e.Voicing === keyw;
    });

    console.log(voice);
    // for theme
    const theme = songnames.filter(function (e) {
        return e.Theme === keyw;
    });

    console.log(theme);
    // for genre
    const genre = songnames.filter(function (e) {
        return e.Genre === keyw;
    });

    console.log(genre);
    // for tempo
    const tempo = songnames.filter(function (e) {
        return e.Tempo === keyw;
    });

    console.log(tempo);
    // for level
    const level = songnames.filter(function (e) {
        return e.Level === keyw;
    });

    console.log(level);

    return (
        <>
            {language.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}
            {name.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}
            {choir.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}

            {voice.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}
            {genre.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}
            {theme.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}
            {tempo.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}
            {level.map((ele) => {
                return (
                    <div className="filter_result">
                        <SongData
                            song_name={ele.songName}
                            artist_Name={ele.artistName}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default FilteredItem;
