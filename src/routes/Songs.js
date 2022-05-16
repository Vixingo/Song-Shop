import React, { useState } from "react";
import SongMenu from "../components/SongMenu/SongMenu";
import { Outlet } from "react-router-dom";
import "../App.css";
import MySongs from "../components/SongMenuDetail/MySongs";

function Songs() {
    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    {" "}
                    <SongMenu />
                </div>
                <div className="col-md-7">
                    {/* <MySongs /> */}
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Songs;
