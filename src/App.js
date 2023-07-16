import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/hoc/Layout";
import MainPage from "./pages/MainPage";
import CharactersPage from "./pages/CharactersPage";
import NotFoundPage from "./pages/NotFoundPage";
import EpisodePage from "./pages/EpisodePage";
import LocationPage from "./pages/LocationPage";
import DetailCharacters from "./components/detailCharacters/DetailCharacters";
import DetailLocation from "./components/detailLocation/DetailLocation";
import DetailEpisodes from "./components/detailEpisodes/DetailEpisodes";
import LayoutDetail from "./components/hoc/LayoutDetail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="characters" element={<CharactersPage/>}/>

                <Route path="episodes" element={<EpisodePage/>}/>

                <Route path="locations" element={<LocationPage/>}/>

            </Route>

            <Route path="/" element={<LayoutDetail/>}>
                <Route path="characters/:id" element={<DetailCharacters/>}/>
                <Route path="episodes/:id" element={<DetailEpisodes/>}/>
                <Route path="locations/:id" element={<DetailLocation/>}/>
            </Route>

            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
    );
}

export default App;
