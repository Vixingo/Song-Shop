import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Notfound from "./components/Notfound/Notfound";
import MySongs from "./components/SongMenuDetail/MySongs";
import MyPlaylists from "./components/SongMenuDetail/MyPlaylists";
import Songs from "./routes/Songs";
import GetMoreSongs from "./components/SongMenuDetail/GetMoreSongs";
import { useEffect, useState } from "react";
import Buy from "./components/Buy/Buy";
import Filter from "./components/Filter/Filter";
import FilteredList from "./components/Filter/FilteredList";

function App() {
    const [data, setData] = useState();

    return (
        <>
            <BrowserRouter>
                <div className="app">
                    {" "}
                    <Navbar />
                    <div className="app__body">
                        <Routes>
                            <Route path="/" element={<Songs />}>
                                <Route path="/" element={<MySongs />} />
                                <Route
                                    path="my_playlists"
                                    element={<MyPlaylists />}
                                />
                                <Route
                                    path="get_more_songs"
                                    element={<GetMoreSongs />}
                                />
                                <Route
                                    path="get_more_songs/filter"
                                    element={<Filter setData={setData} />}
                                />
                                <Route
                                    path="get_more_songs/filtered_list"
                                    element={<FilteredList data={data} />}
                                />
                                <Route
                                    path="get_more_songs/buy"
                                    element={<Buy />}
                                />
                            </Route>
                            <Route path="*" element={<Notfound />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
