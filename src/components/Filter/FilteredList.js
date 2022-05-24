import React, { useEffect, useState } from "react";
import songnames from "../../songnames.json";
import SongData from "../SongData/SongData";
import "./Filter.css";
import FilteredItem from "./FilteredItem";
function FilteredList({ data }) {
    // const [searchedArray, setSearchedArray] = React.useState(songnames);

    // const [searchedItem, setSearchedItem] = useState();

    // React.useEffect(() => {
    //     if (data.length !== 0) {
    //         const searchedObjects = [];
    //         songnames.forEach((singleHeroObject, index) => {
    //             // console.log(singleHeroObject);
    //             Object.values(singleHeroObject).map((onlyValues, valIndex) => {
    //                 if (
    //                     onlyValues.toLowerCase().includes(data[0].toLowerCase())
    //                 ) {
    //                     searchedObjects.push(singleHeroObject);
    //                     return;
    //                 }
    //             });
    //         });
    //         setSearchedArray(searchedObjects);
    //         console.log(searchedObjects);
    //     } else {
    //         setSearchedArray(songnames);
    //     }
    // }, [data]);

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
                                <FilteredItem keyw={keyw} />
                                {/* <div className="filter_result"> */}
                                {/* {keyw ? newtech(keyw) : ""} */}
                                {/* {songnames.forEach(
                                    (singleHeroObject, index) => {
                                        Object.values(singleHeroObject).map(
                                            (onlyValues, valIndex) => {
                                                if (
                                                    onlyValues
                                                        .toLowerCase()
                                                        .includes(
                                                            keyw.toLowerCase()
                                                        )
                                                ) {
                                                    return (
                                                        <p>
                                                            {
                                                                singleHeroObject.songName
                                                            }
                                                        </p>
                                                    );
                                                } else {
                                                    <h1>No data</h1>;
                                                }
                                            }
                                        );
                                    }
                                )} */}

                                {/* {searchedItem.map((sed, index) => {
                                        return <h2>noo</h2>;
                                    })} */}
                                {/* </div> */}
                            </>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default FilteredList;
