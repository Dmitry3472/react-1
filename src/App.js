import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx"
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
                        <Route path='/profile' element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        // updateNewPostText={props.updateNewPostText}
                        />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;