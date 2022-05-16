import React from "react";
import songnames from "../../songnames.json";
import SongData from "../SongData/SongData";
import "./Filter.css";
function FilteredList({ data }) {
    const [searchedArray, setSearchedArray] = React.useState(songnames);
    React.useEffect(() => {
        if (data.length === 0) {
            setSearchedArray(songnames);
        } else {
            const searchedObjects = [];
            songnames.forEach((singleHeroObject, index) => {
                // console.log(singleHeroObject);
                Object.values(singleHeroObject).map((onlyValues, valIndex) => {
                    if (onlyValues.toLowerCase().includes(data.toLowerCase())) {
                        searchedObjects.push(singleHeroObject);
                        return;
                    }
                });
            });
            setSearchedArray(searchedObjects);
        }
    }, [data]);
    return (
        <>
            <div>
                <h4 style={{ padding: "10px" }}>
                    Showing result for <b>"{data}"</b>
                </h4>
            </div>
            {data !== "" ? (
                <>
                    <div className="filter_output">
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
            ) : (
                " am I joke to you? why search box empty?"
            )}
        </>
    );
}

export default FilteredList;
