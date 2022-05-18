import React from "react";
import songnames from "../../songnames.json";
import SongData from "../SongData/SongData";
import "./Filter.css";
function FilteredList({ data }) {
    const [searchedArray, setSearchedArray] = React.useState(songnames);

    React.useEffect(() => {
        if (data.length !== 0) {
            const searchedObjects = [];
            songnames.forEach((singleHeroObject, index) => {
                // console.log(singleHeroObject);
                Object.values(singleHeroObject).map((onlyValues, valIndex) => {
                    if (
                        onlyValues.toLowerCase().includes(data[0].toLowerCase())
                    ) {
                        searchedObjects.push(singleHeroObject);
                        return;
                    }
                });
            });
            setSearchedArray(searchedObjects);
        } else {
            setSearchedArray(songnames);
        }
    }, [data]);

    return (
        <>
            <div className="filter_output">
                {data.map((keyw) => {
                    return (
                        <>
                            {" "}
                            <div className="search_name">
                                <h4 style={{ padding: "10px" }}>
                                    Showing result for "<b>{keyw}</b>"
                                </h4>
                            </div>
                            <>
                                <div className="filter_result">
                                    {searchedArray.map((sed, index) => {
                                        return (
                                            <SongData
                                                song_name={sed.songName}
                                                artist_Name={sed.artistName}
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default FilteredList;
